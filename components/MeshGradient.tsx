'use client';

import { useEffect, useRef } from 'react';

interface MeshGradientProps {
  colors?: string[];
  speed?: number;
  distortion?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function MeshGradient({
  colors,
  speed = 0.4,
  distortion = 0.5,
  className,
  style,
}: MeshGradientProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', {
      antialias: false,
      premultipliedAlpha: false,
      alpha: true,
    });
    if (!gl) return;

    const vs = `
      attribute vec2 a_pos;
      varying vec2 v_uv;
      void main() {
        v_uv = a_pos * 0.5 + 0.5;
        gl_Position = vec4(a_pos, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_uv;
      uniform float u_time;
      uniform vec2 u_res;
      uniform float u_distortion;
      uniform vec3 u_c0;
      uniform vec3 u_c1;
      uniform vec3 u_c2;
      uniform vec3 u_c3;

      vec2 hash(vec2 p) {
        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
        return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
              dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
          mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
              dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
          u.y);
      }

      void main() {
        vec2 uv = v_uv;
        float aspect = u_res.x / u_res.y;
        vec2 p = uv;
        p.x *= aspect;

        float t = u_time * 0.18;
        float n1 = noise(p * 1.4 + vec2(t, -t * 0.7)) * 0.5 + 0.5;
        float n2 = noise(p * 2.2 + vec2(-t * 0.6, t * 0.9)) * 0.5 + 0.5;
        float n3 = noise(p * 3.1 + vec2(t * 0.9, t * 0.4)) * 0.5 + 0.5;

        vec3 a = mix(u_c0, u_c1, smoothstep(0.0, 1.0, n1));
        vec3 b = mix(u_c2, u_c3, smoothstep(0.0, 1.0, n2));
        vec3 col = mix(a, b, smoothstep(0.2, 0.8, n3));
        col += (n1 - n2) * u_distortion * 0.12;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compile(type: number, src: string) {
      const s = gl!.createShader(type);
      if (!s) return null;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) return null;
      return s;
    }

    const vsh = compile(gl.VERTEX_SHADER, vs);
    const fsh = compile(gl.FRAGMENT_SHADER, fs);
    if (!vsh || !fsh) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vsh);
    gl.attachShader(prog, fsh);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uDist = gl.getUniformLocation(prog, 'u_distortion');
    const uC0 = gl.getUniformLocation(prog, 'u_c0');
    const uC1 = gl.getUniformLocation(prog, 'u_c1');
    const uC2 = gl.getUniformLocation(prog, 'u_c2');
    const uC3 = gl.getUniformLocation(prog, 'u_c3');

    const hex = (h: string): [number, number, number] => {
      const n = h.replace('#', '');
      return [
        parseInt(n.slice(0, 2), 16) / 255,
        parseInt(n.slice(2, 4), 16) / 255,
        parseInt(n.slice(4, 6), 16) / 255,
      ];
    };
    const palette = colors || ['#2F8F6B', '#17694C', '#E5F5EE', '#FAFAF7'];
    const [c0, c1, c2, c3] = palette.map(hex);
    gl.uniform3f(uC0, ...c0);
    gl.uniform3f(uC1, ...c1);
    gl.uniform3f(uC2, ...c2);
    gl.uniform3f(uC3, ...c3);
    gl.uniform1f(uDist, distortion);

    let raf = 0;
    const start = performance.now();
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.round(canvas.clientWidth * dpr);
      const h = Math.round(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };

    const draw = () => {
      if (!running) return;
      resize();
      gl.uniform1f(uTime, ((performance.now() - start) * 0.001) * speed);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(draw);
    };
    draw();

    const io = new IntersectionObserver(([e]) => {
      const wasRunning = running;
      running = e.isIntersecting;
      if (running && !wasRunning) draw();
    });
    io.observe(canvas);

    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, [colors, speed, distortion]);

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
    />
  );
}

interface EdgeMeshProps {
  corner?: 'tr' | 'tl' | 'br' | 'bl';
  size?: number;
  palette?: string[];
  speed?: number;
  opacity?: number;
}

export function EdgeMesh({
  corner = 'tr',
  size = 720,
  palette,
  speed = 0.35,
  opacity = 0.5,
}: EdgeMeshProps) {
  const colors = palette || ['#2F8F6B', '#E5F5EE', '#F1FAF5', '#FAFAF7'];
  const pos: Record<string, React.CSSProperties> = {
    tr: { top: '-15%', right: '-12%' },
    tl: { top: '-15%', left: '-12%' },
    br: { bottom: '-18%', right: '-12%' },
    bl: { bottom: '-18%', left: '-12%' },
  };
  const maskDir: Record<string, string> = {
    tr: 'radial-gradient(ellipse 70% 70% at 100% 0%, #000 0%, rgba(0,0,0,0.6) 45%, transparent 80%)',
    tl: 'radial-gradient(ellipse 70% 70% at 0% 0%, #000 0%, rgba(0,0,0,0.6) 45%, transparent 80%)',
    br: 'radial-gradient(ellipse 70% 70% at 100% 100%, #000 0%, rgba(0,0,0,0.6) 45%, transparent 80%)',
    bl: 'radial-gradient(ellipse 70% 70% at 0% 100%, #000 0%, rgba(0,0,0,0.6) 45%, transparent 80%)',
  };

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: size,
        height: size,
        ...pos[corner],
        zIndex: 0,
        pointerEvents: 'none',
        opacity,
        WebkitMaskImage: maskDir[corner],
        maskImage: maskDir[corner],
        filter: 'blur(40px)',
      }}
    >
      <MeshGradient colors={colors} speed={speed} distortion={0.45} />
    </div>
  );
}
