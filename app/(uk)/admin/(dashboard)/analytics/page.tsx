import { createClient } from '@/lib/supabase-server'

type Lead = {
  id: string
  created_at: string
  langs: string | null
  scope: string | null
  pages: string | null
}

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="text-white text-3xl font-bold">{value}</p>
    </div>
  )
}

function BreakdownRow({ label, count, total }: { label: string; count: number; total: number }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0
  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-300 text-sm w-40 shrink-0">{label}</span>
      <div className="flex-1 bg-gray-800 rounded-full h-2">
        <div
          className="bg-green-500 h-2 rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-gray-400 text-sm w-12 text-right">{count}</span>
      <span className="text-gray-600 text-sm w-10 text-right">{pct}%</span>
    </div>
  )
}

export default async function AnalyticsPage() {
  const supabase = await createClient()

  const { data: leads } = await supabase
    .from('leads')
    .select('id, created_at, langs, scope, pages')
    .order('created_at', { ascending: false })

  const allLeads: Lead[] = leads ?? []
  const total = allLeads.length

  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const startOfWeek = new Date(now)
  startOfWeek.setDate(now.getDate() - now.getDay())

  const thisMonth = allLeads.filter(
    (l) => new Date(l.created_at) >= startOfMonth
  ).length

  const thisWeek = allLeads.filter(
    (l) => new Date(l.created_at) >= startOfWeek
  ).length

  // Breakdown helpers
  function countBy(key: keyof Lead, value: string) {
    return allLeads.filter((l) => l[key] === value).length
  }

  // Last 14 days
  const days: { date: string; count: number }[] = []
  for (let i = 13; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(now.getDate() - i)
    const dateStr = d.toISOString().slice(0, 10)
    const count = allLeads.filter((l) => l.created_at?.slice(0, 10) === dateStr).length
    days.push({ date: dateStr, count })
  }

  const maxCount = Math.max(...days.map((d) => d.count), 1)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Аналітика</h1>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Всього заявок" value={total} />
        <StatCard label="Цього місяця" value={thisMonth} />
        <StatCard label="Цього тижня" value={thisWeek} />
      </div>

      {/* 14-day chart */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
        <h2 className="text-sm text-gray-400 font-medium mb-4">Заявки за 14 днів</h2>
        <div className="flex items-end gap-1.5 h-24">
          {days.map(({ date, count }) => (
            <div key={date} className="flex-1 flex flex-col items-center gap-1" title={`${date}: ${count}`}>
              <div
                className="w-full bg-green-500/80 rounded-sm transition-all"
                style={{ height: `${(count / maxCount) * 80}px`, minHeight: count > 0 ? 4 : 0 }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          <span>{days[0]?.date.slice(5)}</span>
          <span>{days[days.length - 1]?.date.slice(5)}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* By language */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-sm text-gray-400 font-medium mb-4">За мовою</h2>
          <div className="space-y-3">
            <BreakdownRow label="Українська (UA)" count={countBy('langs', 'ua')} total={total} />
            <BreakdownRow label="Чеська (CZ)" count={countBy('langs', 'cz')} total={total} />
          </div>
        </div>

        {/* By scope */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-sm text-gray-400 font-medium mb-4">За обсягом</h2>
          <div className="space-y-3">
            <BreakdownRow label="Тільки сайт" count={countBy('scope', 'site')} total={total} />
            <BreakdownRow label="+ Google + SEO" count={countBy('scope', 'full')} total={total} />
            <BreakdownRow label="+ реклама" count={countBy('scope', 'full-ads')} total={total} />
          </div>
        </div>

        {/* By format */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-sm text-gray-400 font-medium mb-4">За форматом</h2>
          <div className="space-y-3">
            <BreakdownRow label="Лендинг (1 стор.)" count={countBy('pages', 'одна-сторінка') + countBy('pages', 'jednostrankovy')} total={total} />
            <BreakdownRow label="3–5 сторінок" count={countBy('pages', 'кілька-сторінок') + countBy('pages', 'nekolik-stranek')} total={total} />
            <BreakdownRow label="Багатосторінковий" count={countBy('pages', 'багатосторінковий') + countBy('pages', 'vicestranovy')} total={total} />
          </div>
        </div>
      </div>
    </div>
  )
}
