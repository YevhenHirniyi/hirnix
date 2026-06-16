import { createClient } from '@/lib/supabase-server'

const pageLabels: Record<string, string> = {
  'одна-сторінка': 'Лендинг',
  'кілька-сторінок': '3–5 сторінок',
  'багатосторінковий': 'Багато сторінок',
  'jednostrankovy': 'Landing page',
  'nekolik-stranek': '3–5 stránek',
  'vicestranovy': 'Více stránek',
}

const scopeLabels: Record<string, string> = {
  site: 'Тільки сайт',
  full: '+ Google + SEO',
  'full-ads': '+ реклама',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default async function LeadsPage() {
  const supabase = await createClient()

  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-2">Заявки</h1>
        <p className="text-red-400 text-sm">Помилка завантаження: {error.message}</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Заявки</h1>
        <span className="text-gray-400 text-sm">{leads?.length ?? 0} всього</span>
      </div>

      {!leads?.length ? (
        <p className="text-gray-500">Заявок ще немає.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 text-left">
                <th className="px-4 py-3 font-medium">Ім&apos;я</th>
                <th className="px-4 py-3 font-medium">Бізнес</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Телефон</th>
                <th className="px-4 py-3 font-medium">Формат</th>
                <th className="px-4 py-3 font-medium">Мова</th>
                <th className="px-4 py-3 font-medium">Обсяг</th>
                <th className="px-4 py-3 font-medium">Дата</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, i) => (
                <tr
                  key={lead.id}
                  className={`border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors ${
                    i === leads.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-white">{lead.name}</td>
                  <td className="px-4 py-3 text-gray-300">{lead.biz_type || '—'}</td>
                  <td className="px-4 py-3">
                    <a
                      href={`mailto:${lead.email}`}
                      className="text-green-400 hover:text-green-300"
                    >
                      {lead.email}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-gray-300">{lead.phone || '—'}</td>
                  <td className="px-4 py-3 text-gray-300">
                    {pageLabels[lead.pages] ?? lead.pages ?? '—'}
                  </td>
                  <td className="px-4 py-3">
                    {lead.langs ? (
                      <span className="uppercase text-xs font-semibold bg-gray-800 px-2 py-0.5 rounded">
                        {lead.langs}
                      </span>
                    ) : '—'}
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    {scopeLabels[lead.scope] ?? lead.scope ?? '—'}
                  </td>
                  <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                    {lead.created_at ? formatDate(lead.created_at) : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
