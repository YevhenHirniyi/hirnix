import { createClient } from './supabase-server'
import uk from '@/config/i18n/uk'
import cz from '@/config/i18n/cz'
import type { SiteT } from '@/config/i18n/types'

export async function getSiteContent(lang: 'uk' | 'cz' = 'uk'): Promise<SiteT> {
  const defaults = lang === 'uk' ? uk : cz

  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('site_sections')
      .select('section, data')
      .eq('lang', lang)

    if (error || !data?.length) return defaults

    const result = { ...defaults } as Record<string, unknown>
    for (const row of data) {
      result[row.section] = row.data
    }

    return result as unknown as SiteT
  } catch {
    return defaults
  }
}
