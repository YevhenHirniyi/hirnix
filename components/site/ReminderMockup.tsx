interface Props {
  t: { app: string; sender: string; time: string; title: string; body: string; address: string; };
}

/** Lock-screen style push notification of the visit reminder a client receives. */
export function ReminderMockup({ t }: Props) {
  return (
    <figure className="rm">
      <div className="rm-card" role="img" aria-label={`${t.app}, ${t.sender}: ${t.title}. ${t.body}`}>
        <div aria-hidden>
          <div className="rm-head"><span className="rm-app">{t.app}</span><span>{t.time}</span></div>
          <p className="rm-sender">{t.sender}</p>
          <p className="rm-title">{t.title}</p>
          <p className="rm-body">{t.body}</p>
          <p className="rm-addr">{t.address}</p>
        </div>
      </div>
    </figure>
  );
}
