'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText, BarChart2, Edit3 } from 'lucide-react'

const navLinks = [
  { href: '/admin/leads', label: 'Заявки', icon: FileText },
  { href: '/admin/analytics', label: 'Аналітика', icon: BarChart2 },
  { href: '/admin/content', label: 'Контент', icon: Edit3 },
]

export function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="flex-1 space-y-1">
      {navLinks.map(({ href, label, icon: Icon }) => {
        const active = pathname === href || pathname.startsWith(href + '/')
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 text-sm transition-colors px-3 py-2 rounded-lg ${
              active
                ? 'bg-green-500/10 text-green-400 font-medium'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <Icon size={16} />
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
