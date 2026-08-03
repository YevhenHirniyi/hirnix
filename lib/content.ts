import { createClient } from './supabase-server'
import uk from '@/config/i18n/uk'
import cz from '@/config/i18n/cz'
import en from '@/config/i18n/en'
import type { SiteT } from '@/config/i18n/types'

const defaults: Record<'uk' | 'cz' | 'en', SiteT> = { uk, cz, en }

export async function getSiteContent(lang: 'uk' | 'cz' | 'en' = 'uk'): Promise<SiteT> {
  const fallback = defaults[lang]

  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('site_sections')
      .select('section, data')
      .eq('lang', lang)

    if (error || !data?.length) return fallback

    const result = { ...fallback } as Record<string, unknown>
    for (const row of data) {
      result[row.section] = row.data
    }

    return result as unknown as SiteT
  } catch {
    return fallback
  }
}
