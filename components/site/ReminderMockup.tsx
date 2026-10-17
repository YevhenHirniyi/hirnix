interface Props {
  t: { app: string; time: string; title: string; body: string; address: string; label: string };
}

/** Phone-notification style mockup of the reminder a client receives about a visit. */
export function ReminderMockup({ t }: Props) {
  return (
    <figure className="rm">
      <div className="rm-card" role="img" aria-label={`${t.label}: ${t.title}. ${t.body}`}>
        <span className="rm-icon" aria-hidden>NOIR</span>
        <div aria-hidden>
          <div className="rm-head"><span className="rm-app">{t.app}</span><span>{t.time}</span></div>
          <p className="rm-title">{t.title}</p>
          <p className="rm-body">{t.body}</p>
          <p className="rm-addr">{t.address}</p>
        </div>
      </div>
      <figcaption className="rm-label">{t.label}</figcaption>
    </figure>
  );
}
