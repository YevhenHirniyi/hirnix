'use client'

import { useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { Check, Loader2, ChevronRight, Globe } from 'lucide-react'
import uk from '@/config/i18n/uk'
import cz from '@/config/i18n/cz'

// ─── Types ────────────────────────────────────────────────────────────────────

type Lang = 'uk' | 'cz'
type SectionData = unknown
type LangData = Record<string, SectionData>

type SavedSection = {
  section: string
  lang: string
  data: SectionData
}

const SECTIONS: Array<{ key: string; label: string }> = [
  { key: 'header', label: 'Шапка' },
  { key: 'hero', label: 'Герой (1-й екран)' },
  { key: 'marqueeTop', label: 'Рядок верхній' },
  { key: 'marqueeDark', label: 'Рядок темний' },
  { key: 'forWhom', label: 'Для кого' },
  { key: 'pain', label: 'Болі клієнта' },
  { key: 'manifesto', label: 'Маніфест' },
  { key: 'services', label: 'Послуги' },
  { key: 'stats', label: 'Статистика' },
  { key: 'process', label: 'Процес' },
  { key: 'examples', label: 'Приклади' },
  { key: 'calc', label: 'Форма прорахунку' },
  { key: 'about', label: 'Про нас' },
  { key: 'faq', label: 'FAQ' },
  { key: 'finalCta', label: 'Фінальний заклик' },
  { key: 'footer', label: 'Підвал' },
]

// ─── Primitives ───────────────────────────────────────────────────────────────

const inputCls = 'w-full bg-gray-800 text-white text-sm px-3 py-2 rounded-lg outline-none focus:ring-1 focus:ring-green-500'

function TF({
  label, value, onChange, multiline = false, rows = 2, hint,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  multiline?: boolean
  rows?: number
  hint?: string
}) {
  return (
    <div>
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      {multiline ? (
        <textarea
          value={value ?? ''}
          onChange={e => onChange(e.target.value)}
          rows={rows}
          className={inputCls + ' resize-none'}
        />
      ) : (
        <input
          type="text"
          value={value ?? ''}
          onChange={e => onChange(e.target.value)}
          className={inputCls}
        />
      )}
      {hint && <p className="text-xs text-gray-600 mt-0.5">{hint}</p>}
    </div>
  )
}

function StrList({
  label, value, onChange, hint,
}: {
  label: string
  value: string[]
  onChange: (v: string[]) => void
  hint?: string
}) {
  const arr = Array.isArray(value) ? value : []
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className="text-xs text-gray-400">{label}</label>
        <button
          type="button"
          onClick={() => onChange([...arr, ''])}
          className="text-xs text-green-400 hover:text-green-300 transition-colors"
        >
          + Додати
        </button>
      </div>
      {hint && <p className="text-xs text-gray-600 mb-2">{hint}</p>}
      <div className="space-y-1.5">
        {arr.map((item, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input
              type="text"
              value={item}
              onChange={e => {
                const next = [...arr]
                next[i] = e.target.value
                onChange(next)
              }}
              className={inputCls}
            />
            <button
              type="button"
              onClick={() => onChange(arr.filter((_, j) => j !== i))}
              className="text-gray-500 hover:text-red-400 text-lg leading-none shrink-0 w-6"
            >
              ×
            </button>
          </div>
        ))}
        {arr.length === 0 && (
          <p className="text-xs text-gray-600 italic">Список порожній</p>
        )}
      </div>
    </div>
  )
}

type ObjField = { key: string; label: string; multiline?: boolean; rows?: number; hint?: string }

function ObjList({
  label, value, fields, onChange, itemLabel = 'Елемент',
}: {
  label: string
  value: Record<string, unknown>[]
  fields: ObjField[]
  onChange: (v: Record<string, unknown>[]) => void
  itemLabel?: string
}) {
  const arr = Array.isArray(value) ? value : []
  const emptyItem = Object.fromEntries(fields.map(f => [f.key, '']))
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-xs text-gray-400 uppercase tracking-wide font-medium">{label}</label>
        <button
          type="button"
          onClick={() => onChange([...arr, { ...emptyItem }])}
          className="text-xs text-green-400 hover:text-green-300 transition-colors"
        >
          + Додати {itemLabel}
        </button>
      </div>
      <div className="space-y-3">
        {arr.map((item, i) => (
          <div key={i} className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-3 space-y-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500 font-mono">{itemLabel} {i + 1}</span>
              <button
                type="button"
                onClick={() => onChange(arr.filter((_, j) => j !== i))}
                className="text-xs text-gray-500 hover:text-red-400 transition-colors"
              >
                Видалити
              </button>
            </div>
            {fields.map(f => (
              <TF
                key={f.key}
                label={f.label}
                value={(item[f.key] ?? '') as string}
                multiline={f.multiline}
                rows={f.rows}
                hint={f.hint}
                onChange={v => {
                  const next = arr.map((el, j) => j === i ? { ...el, [f.key]: v } : el)
                  onChange(next)
                }}
              />
            ))}
          </div>
        ))}
        {arr.length === 0 && (
          <p className="text-xs text-gray-600 italic px-1">Список порожній</p>
        )}
      </div>
    </div>
  )
}

function FieldGroup({
  label, value, fields, onChange,
}: {
  label: string
  value: Record<string, unknown>
  fields: ObjField[]
  onChange: (v: Record<string, unknown>) => void
}) {
  const obj = value ?? {}
  return (
    <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-3">
      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3">{label}</p>
      <div className="space-y-2">
        {fields.map(f => (
          <TF
            key={f.key}
            label={f.label}
            value={(obj[f.key] ?? '') as string}
            multiline={f.multiline}
            rows={f.rows}
            hint={f.hint}
            onChange={v => onChange({ ...obj, [f.key]: v })}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Section Forms ─────────────────────────────────────────────────────────────

function SectionForm({
  section, data, onChange,
}: {
  section: string
  data: SectionData
  onChange: (d: SectionData) => void
}) {
  // For marqueeTop / marqueeDark the section data IS a string array
  if (section === 'marqueeTop' || section === 'marqueeDark') {
    return (
      <StrList
        label="Елементи рядка"
        value={data as string[]}
        hint="Використовуйте *ital*слово для відображення курсивом"
        onChange={onChange}
      />
    )
  }

  const d = (data ?? {}) as Record<string, unknown>
  const set = (key: string) => (v: unknown) => onChange({ ...d, [key]: v })
  const grp = (key: string) => (v: Record<string, unknown>) => onChange({ ...d, [key]: v })

  switch (section) {
    case 'header':
      return (
        <div className="space-y-5">
          <TF label="Текст CTA-кнопки" value={d.cta as string} onChange={set('cta')} />
          <ObjList
            label="Навігація"
            value={d.nav as Record<string, unknown>[]}
            itemLabel="Пункт"
            fields={[
              { key: 'label', label: 'Назва' },
              { key: 'href', label: 'Посилання (наприклад: #services)' },
            ]}
            onChange={set('nav')}
          />
        </div>
      )

    case 'hero':
      return (
        <div className="space-y-5">
          <FieldGroup
            label="Мета-рядок"
            value={d.meta as Record<string, unknown>}
            fields={[
              { key: 'location', label: 'Локація' },
              { key: 'audience', label: 'Аудиторія' },
              { key: 'services', label: 'Послуги' },
            ]}
            onChange={grp('meta')}
          />
          <FieldGroup
            label="Головний заголовок H1"
            value={d.h1 as Record<string, unknown>}
            fields={[
              { key: 'pre', label: 'Частина 1 (звичайна)' },
              { key: 'italic', label: 'Курсив' },
              { key: 'mid', label: 'Частина 2' },
              { key: 'highlight', label: 'Виділений текст' },
              { key: 'after', label: 'Частина 3' },
              { key: 'accent', label: 'Акцент (зелений)' },
            ]}
            onChange={grp('h1')}
          />
          <TF label="Підзаголовок (lead)" value={d.lead as string} multiline rows={3} onChange={set('lead')} />
          <div className="grid grid-cols-2 gap-3">
            <TF label="Кнопка 1 (CTA)" value={d.cta1 as string} onChange={set('cta1')} />
            <TF label="Кнопка 2 (вторинна)" value={d.cta2 as string} onChange={set('cta2')} />
          </div>
          <StrList
            label="Дрібний шрифт (3 пункти під кнопками)"
            value={d.fineprint as string[]}
            onChange={set('fineprint')}
          />
          <FieldGroup
            label="Mockup — превʼю сайту"
            value={d.mockup as Record<string, unknown>}
            fields={[
              { key: 'notifTitle', label: 'Сповіщення: заголовок' },
              { key: 'notifMsg', label: 'Сповіщення: текст' },
              { key: 'notifTime', label: 'Сповіщення: час' },
              { key: 'siteHeadline', label: 'Сайт: заголовок' },
              { key: 'siteLead', label: 'Сайт: підзаголовок' },
              { key: 'siteCta1', label: 'Сайт: кнопка 1' },
              { key: 'siteCta2', label: 'Сайт: кнопка 2' },
              { key: 'gbpName', label: 'Google картка: назва' },
              { key: 'gbpRating', label: 'Google картка: рейтинг' },
              { key: 'gbpContact', label: "Google картка: зв'язок" },
              { key: 'gbpRoute', label: 'Google картка: маршрут' },
              { key: 'gbpSite', label: 'Google картка: сайт' },
            ]}
            onChange={grp('mockup')}
          />
        </div>
      )

    case 'forWhom':
      return (
        <div className="space-y-5">
          <TF label="Eyebrow (мітка над заголовком)" value={d.eyebrow as string} onChange={set('eyebrow')} />
          <FieldGroup
            label="Заголовок"
            value={d.h2 as Record<string, unknown>}
            fields={[
              { key: 'pre', label: 'Частина 1' },
              { key: 'mid', label: 'Середина' },
              { key: 'accent', label: 'Акцент' },
            ]}
            onChange={grp('h2')}
          />
          <TF label="Підзаголовок (lead)" value={d.lead as string} multiline rows={3} onChange={set('lead')} />
          <StrList label="Ніші (теги бізнесів)" value={d.niches as string[]} onChange={set('niches')} />
        </div>
      )

    case 'pain':
      return (
        <div className="space-y-5">
          <TF label="Eyebrow" value={d.eyebrow as string} onChange={set('eyebrow')} />
          <FieldGroup
            label="Заголовок"
            value={d.h2 as Record<string, unknown>}
            fields={[
              { key: 'pre', label: 'Основа' },
              { key: 'accent', label: 'Акцент' },
            ]}
            onChange={grp('h2')}
          />
          <TF label="Lead" value={d.lead as string} multiline rows={3} onChange={set('lead')} />
          <ObjList
            label="Болі (картки)"
            value={d.items as Record<string, unknown>[]}
            itemLabel="Біль"
            fields={[
              { key: 'title', label: 'Заголовок' },
              { key: 'body', label: 'Текст', multiline: true, rows: 2 },
            ]}
            onChange={set('items')}
          />
          <TF label="CTA-кнопка" value={d.cta as string} onChange={set('cta')} />
        </div>
      )

    case 'manifesto':
      return (
        <div className="space-y-5">
          <TF label="Eyebrow" value={d.eyebrow as string} onChange={set('eyebrow')} />
          <FieldGroup
            label="Заголовок"
            value={d.h2 as Record<string, unknown>}
            fields={[
              { key: 'pre', label: 'Частина 1' },
              { key: 'mid', label: 'Частина 2' },
              { key: 'accent', label: 'Акцент' },
            ]}
            onChange={grp('h2')}
          />
          <TF label="Lead" value={d.lead as string} multiline rows={3} onChange={set('lead')} />
          <TF label="Вступний абзац (intro)" value={d.intro as string} multiline rows={3} onChange={set('intro')} />
          <ObjList
            label="Принципи"
            value={d.rows as Record<string, unknown>[]}
            itemLabel="Принцип"
            fields={[
              { key: 'num', label: 'Номер (напр. 01 / Підхід)' },
              { key: 'title', label: 'Заголовок' },
              { key: 'body', label: 'Текст', multiline: true, rows: 2 },
            ]}
            onChange={set('rows')}
          />
        </div>
      )

    case 'services':
      return (
        <div className="space-y-5">
          <TF label="Eyebrow" value={d.eyebrow as string} onChange={set('eyebrow')} />
          <FieldGroup
            label="Заголовок"
            value={d.h2 as Record<string, unknown>}
            fields={[
              { key: 'pre', label: 'Частина 1' },
              { key: 'mid', label: 'Частина 2' },
              { key: 'accent', label: 'Акцент' },
            ]}
            onChange={grp('h2')}
          />
          <TF label="Lead" value={d.lead as string} multiline rows={3} onChange={set('lead')} />
          <ServicesEditor
            value={d.services as ServiceItem[]}
            onChange={set('services')}
          />
        </div>
      )

    case 'stats':
      return (
        <div className="space-y-5">
          <TF label="Eyebrow" value={d.eyebrow as string} onChange={set('eyebrow')} />
          <FieldGroup
            label="Заголовок"
            value={d.h2 as Record<string, unknown>}
            fields={[
              { key: 'pre', label: 'Частина 1' },
              { key: 'mid', label: 'Частина 2' },
              { key: 'accent', label: 'Акцент' },
            ]}
            onChange={grp('h2')}
          />
          <TF label="Lead" value={d.lead as string} multiline rows={2} onChange={set('lead')} />
          <ObjList
            label="Статистика (картки)"
            value={d.stats as Record<string, unknown>[]}
            itemLabel="Картка"
            fields={[
              { key: 'label', label: 'Мітка (напр. 01 / Запуск)' },
              { key: 'value', label: 'Значення (велике число)' },
              { key: 'accent', label: 'Акцент (одиниця)' },
              { key: 'desc', label: 'Опис', multiline: true, rows: 2 },
            ]}
            onChange={set('stats')}
          />
        </div>
      )

    case 'process':
      return (
        <div className="space-y-5">
          <TF label="Eyebrow" value={d.eyebrow as string} onChange={set('eyebrow')} />
          <FieldGroup
            label="Заголовок"
            value={d.h2 as Record<string, unknown>}
            fields={[
              { key: 'pre', label: 'Частина 1' },
              { key: 'mid', label: 'Частина 2' },
              { key: 'accent', label: 'Акцент' },
            ]}
            onChange={grp('h2')}
          />
          <TF label="Lead" value={d.lead as string} multiline rows={3} onChange={set('lead')} />
          <ObjList
            label="Кроки процесу"
            value={d.steps as Record<string, unknown>[]}
            itemLabel="Крок"
            fields={[
              { key: 'num', label: 'Номер (01, 02…)' },
              { key: 'title', label: 'Заголовок' },
              { key: 'body', label: 'Текст', multiline: true, rows: 2 },
              { key: 'when', label: 'Коли (напр. День 1–2)' },
            ]}
            onChange={set('steps')}
          />
        </div>
      )

    case 'examples':
      return (
        <div className="space-y-5">
          <TF label="Eyebrow" value={d.eyebrow as string} onChange={set('eyebrow')} />
          <TF label="Заголовок (h2)" value={d.h2 as string} onChange={set('h2')} />
          <TF label="Lead" value={d.lead as string} multiline rows={3} onChange={set('lead')} />
          <div className="grid grid-cols-2 gap-3">
            <TF label="Мітка «Проблема»" value={d.problemLabel as string} onChange={set('problemLabel')} />
            <TF label="Мітка «Що зробили»" value={d.solutionLabel as string} onChange={set('solutionLabel')} />
          </div>
          <ObjList
            label="Кейси"
            value={d.cases as Record<string, unknown>[]}
            itemLabel="Кейс"
            fields={[
              { key: 'tag', label: 'Тег (тип бізнесу)' },
              { key: 'who', label: 'Хто (клієнт)' },
              { key: 'problem', label: 'Проблема', multiline: true, rows: 2 },
              { key: 'solution', label: 'Рішення', multiline: true, rows: 2 },
            ]}
            onChange={set('cases')}
          />
        </div>
      )

    case 'calc':
      return (
        <div className="space-y-5">
          <TF label="Eyebrow" value={d.eyebrow as string} onChange={set('eyebrow')} />
          <FieldGroup
            label="Заголовок"
            value={d.h2 as Record<string, unknown>}
            fields={[
              { key: 'pre', label: 'Частина 1' },
              { key: 'italic', label: 'Курсив' },
              { key: 'post', label: 'Частина 3' },
            ]}
            onChange={grp('h2')}
          />
          <StrList label="Фактори ціноутворення (список)" value={d.factors as string[]} onChange={set('factors')} />
          <TF label="Заголовок форми" value={d.formHeading as string} onChange={set('formHeading')} />
          <div className="grid grid-cols-2 gap-3">
            <TF label="Поле: ім'я (мітка)" value={d.nameLabel as string} onChange={set('nameLabel')} />
            <TF label="Поле: ім'я (placeholder)" value={d.namePlaceholder as string} onChange={set('namePlaceholder')} />
            <TF label="Поле: бізнес (мітка)" value={d.bizLabel as string} onChange={set('bizLabel')} />
            <TF label="Поле: бізнес (placeholder)" value={d.bizPlaceholder as string} onChange={set('bizPlaceholder')} />
            <TF label="Поле: email (мітка)" value={d.emailLabel as string} onChange={set('emailLabel')} />
            <TF label="Поле: телефон (мітка)" value={d.phoneLabel as string} onChange={set('phoneLabel')} />
            <TF label="Поле: телефон (placeholder)" value={d.phonePlaceholder as string} onChange={set('phonePlaceholder')} />
            <TF label="Текст кнопки надсилання" value={d.submitLabel as string} onChange={set('submitLabel')} />
          </div>
          <TF label="Примітка (після кнопки)" value={d.footnote as string} multiline rows={2} onChange={set('footnote')} />
          <div className="grid grid-cols-3 gap-3">
            <TF label="Група: Формат" value={d.groupFormat as string} onChange={set('groupFormat')} />
            <TF label="Група: Мови" value={d.groupLangs as string} onChange={set('groupLangs')} />
            <TF label="Група: Обсяг" value={d.groupScope as string} onChange={set('groupScope')} />
          </div>
          <StrList label="Типи бізнесу (список у формі)" value={d.bizOptions as string[]} onChange={set('bizOptions')} />
          <ObjList
            label="Опції формату"
            value={d.formatOptions as Record<string, unknown>[]}
            itemLabel="Опція"
            fields={[
              { key: 'v', label: 'Значення (код)' },
              { key: 'l', label: 'Мітка (текст)' },
            ]}
            onChange={set('formatOptions')}
          />
          <ObjList
            label="Опції мов"
            value={d.langOptions as Record<string, unknown>[]}
            itemLabel="Опція"
            fields={[
              { key: 'v', label: 'Значення' },
              { key: 'l', label: 'Мітка' },
            ]}
            onChange={set('langOptions')}
          />
          <ObjList
            label="Опції обсягу"
            value={d.scopeOptions as Record<string, unknown>[]}
            itemLabel="Опція"
            fields={[
              { key: 'v', label: 'Значення' },
              { key: 'l', label: 'Мітка' },
            ]}
            onChange={set('scopeOptions')}
          />
          <TF label="Після відправки: префікс імені" value={d.sentTitlePrefix as string} onChange={set('sentTitlePrefix')} />
          <TF label="Після відправки: повідомлення" value={d.sentMsg as string} multiline rows={2} onChange={set('sentMsg')} />
        </div>
      )

    case 'about':
      return (
        <div className="space-y-5">
          <TF label="Eyebrow" value={d.eyebrow as string} onChange={set('eyebrow')} />
          <FieldGroup
            label="Заголовок"
            value={d.h2 as Record<string, unknown>}
            fields={[
              { key: 'pre', label: 'Частина 1' },
              { key: 'italic', label: 'Курсив' },
              { key: 'post', label: 'Частина 3' },
            ]}
            onChange={grp('h2')}
          />
          <TF label="Абзац 1" value={d.para1 as string} multiline rows={4} onChange={set('para1')} />
          <TF label="Абзац 2" value={d.para2 as string} multiline rows={4} onChange={set('para2')} />
          <StrList label="Пункти (чекмарки)" value={d.checks as string[]} onChange={set('checks')} />
          <TF label="Текст посилання «Написати»" value={d.linkLabel as string} onChange={set('linkLabel')} />
        </div>
      )

    case 'faq':
      return (
        <div className="space-y-5">
          <TF label="Eyebrow" value={d.eyebrow as string} onChange={set('eyebrow')} />
          <FieldGroup
            label="Заголовок"
            value={d.h2 as Record<string, unknown>}
            fields={[
              { key: 'pre', label: 'Частина 1' },
              { key: 'mid', label: 'Частина 2' },
            ]}
            onChange={grp('h2')}
          />
          <TF label="Lead" value={d.lead as string} multiline rows={3} onChange={set('lead')} />
          <ObjList
            label="Питання та відповіді"
            value={d.items as Record<string, unknown>[]}
            itemLabel="Питання"
            fields={[
              { key: 'q', label: 'Питання' },
              { key: 'a', label: 'Відповідь', multiline: true, rows: 3 },
            ]}
            onChange={set('items')}
          />
        </div>
      )

    case 'finalCta':
      return (
        <div className="space-y-5">
          <TF label="Eyebrow" value={d.eyebrow as string} onChange={set('eyebrow')} />
          <FieldGroup
            label="Заголовок"
            value={d.h2 as Record<string, unknown>}
            fields={[
              { key: 'pre', label: 'Частина 1' },
              { key: 'italic', label: 'Курсив' },
              { key: 'accent', label: 'Акцент' },
            ]}
            onChange={grp('h2')}
          />
          <TF label="Lead" value={d.lead as string} multiline rows={3} onChange={set('lead')} />
          <div className="grid grid-cols-2 gap-3">
            <TF label="Кнопка 1" value={d.cta1 as string} onChange={set('cta1')} />
            <TF label="Кнопка 2" value={d.cta2 as string} onChange={set('cta2')} />
            <TF label="Примітка 1" value={d.note1 as string} onChange={set('note1')} />
            <TF label="Примітка 2" value={d.note2 as string} onChange={set('note2')} />
          </div>
          <FieldGroup
            label="Мітки контактів"
            value={d.labels as Record<string, unknown>}
            fields={[
              { key: 'email', label: 'Email' },
              { key: 'telegram', label: 'Telegram' },
              { key: 'location', label: 'Локація' },
              { key: 'schedule', label: 'Графік' },
            ]}
            onChange={grp('labels')}
          />
          <FieldGroup
            label="Значення контактів"
            value={d.values as Record<string, unknown>}
            fields={[
              { key: 'location', label: 'Адреса' },
              { key: 'schedule', label: 'Графік роботи' },
            ]}
            onChange={grp('values')}
          />
        </div>
      )

    case 'footer':
      return (
        <div className="space-y-5">
          <TF label="Опис бренду (під логотипом)" value={d.brand as string} multiline rows={3} onChange={set('brand')} />
          <TF label="Заголовок блоку послуг" value={d.servicesHeading as string} onChange={set('servicesHeading')} />
          <StrList label="Список послуг" value={d.servicesList as string[]} onChange={set('servicesList')} />
          <TF label="Заголовок блоку студії" value={d.studioHeading as string} onChange={set('studioHeading')} />
          <ObjList
            label="Посилання студії"
            value={d.studioLinks as Record<string, unknown>[]}
            itemLabel="Посилання"
            fields={[
              { key: 'label', label: 'Назва' },
              { key: 'href', label: 'Посилання' },
            ]}
            onChange={set('studioLinks')}
          />
          <TF label="Заголовок блоку контактів" value={d.contactsHeading as string} onChange={set('contactsHeading')} />
          <TF label="Telegram" value={d.telegramLabel as string} onChange={set('telegramLabel')} />
          <TF label="WhatsApp" value={d.whatsappLabel as string} onChange={set('whatsappLabel')} />
          <TF label="Локація" value={d.locationLabel as string} onChange={set('locationLabel')} />
        </div>
      )

    default:
      return (
        <p className="text-sm text-gray-500 italic">Редактор для секції «{section}» ще не налаштований.</p>
      )
  }
}

// ─── Services Editor (special case for nested items[]) ───────────────────────

type ServiceItem = {
  num: string
  title: string
  desc: string
  items: string[]
  cta: string
}

function ServicesEditor({
  value, onChange,
}: {
  value: ServiceItem[]
  onChange: (v: ServiceItem[]) => void
}) {
  const arr = Array.isArray(value) ? value : []
  const emptyService: ServiceItem = { num: '', title: '', desc: '', items: [], cta: '' }
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="text-xs text-gray-400 uppercase tracking-wide font-medium">Послуги</label>
        <button
          type="button"
          onClick={() => onChange([...arr, { ...emptyService }])}
          className="text-xs text-green-400 hover:text-green-300 transition-colors"
        >
          + Додати послугу
        </button>
      </div>
      <div className="space-y-4">
        {arr.map((service, i) => (
          <div key={i} className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Послуга {i + 1}</span>
              <button
                type="button"
                onClick={() => onChange(arr.filter((_, j) => j !== i))}
                className="text-xs text-gray-500 hover:text-red-400 transition-colors"
              >
                Видалити
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <TF label="Номер/мітка (напр. 01 / Базовий)" value={service.num}
                onChange={v => onChange(arr.map((s, j) => j === i ? { ...s, num: v } : s))} />
              <TF label="Назва" value={service.title}
                onChange={v => onChange(arr.map((s, j) => j === i ? { ...s, title: v } : s))} />
            </div>
            <TF label="Опис" value={service.desc} multiline rows={2}
              onChange={v => onChange(arr.map((s, j) => j === i ? { ...s, desc: v } : s))} />
            <TF label="Текст кнопки" value={service.cta}
              onChange={v => onChange(arr.map((s, j) => j === i ? { ...s, cta: v } : s))} />
            <StrList
              label="Що включено (список)"
              value={service.items}
              onChange={v => onChange(arr.map((s, j) => j === i ? { ...s, items: v } : s))}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Main SiteEditor Component ────────────────────────────────────────────────

function buildInitialData(lang: Lang, saved: SavedSection[]): LangData {
  const defaults = lang === 'uk' ? uk : cz
  const result: LangData = {}
  for (const s of SECTIONS) {
    const savedRow = saved.find(r => r.section === s.key && r.lang === lang)
    result[s.key] = savedRow ? savedRow.data : (defaults as unknown as Record<string, unknown>)[s.key]
  }
  return result
}

export function SiteEditor({ savedSections }: { savedSections: SavedSection[] }) {
  const supabase = createClient()

  const [lang, setLang] = useState<Lang>('uk')
  const [section, setSection] = useState('header')
  const [dataUk, setDataUk] = useState<LangData>(() => buildInitialData('uk', savedSections))
  const [dataCz, setDataCz] = useState<LangData>(() => buildInitialData('cz', savedSections))
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  const currentData = lang === 'uk' ? dataUk : dataCz
  const setCurrentData = lang === 'uk' ? setDataUk : setDataCz

  const handleSectionChange = useCallback((d: SectionData) => {
    setCurrentData(prev => ({ ...prev, [section]: d }))
  }, [section, setCurrentData])

  const savedSectionKeys = new Set(savedSections.map(s => `${s.section}:${s.lang}`))

  async function handleSave() {
    setSaving(true)
    setError('')
    setSaved(false)

    const sectionData = currentData[section]

    const { error: err } = await supabase
      .from('site_sections')
      .upsert(
        { section, lang, data: sectionData, updated_at: new Date().toISOString() },
        { onConflict: 'section,lang' }
      )

    if (err) {
      setError(err.message)
    } else {
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    }
    setSaving(false)
  }

  const sectionLabel = SECTIONS.find(s => s.key === section)?.label ?? section
  const hasSaved = savedSectionKeys.has(`${section}:${lang}`)

  return (
    <div className="flex gap-6 min-h-0">
      {/* Sidebar */}
      <aside className="w-52 shrink-0">
        {/* Language toggle */}
        <div className="flex gap-1 bg-gray-900 p-1 rounded-xl mb-4">
          {(['uk', 'cz'] as Lang[]).map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-medium py-2 rounded-lg transition-colors ${
                lang === l
                  ? 'bg-green-500 text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Globe size={11} />
              {l === 'uk' ? 'Українська' : 'Чеська'}
            </button>
          ))}
        </div>

        {/* Section list */}
        <nav className="space-y-0.5">
          {SECTIONS.map(s => {
            const isSaved = savedSectionKeys.has(`${s.key}:${lang}`)
            const isActive = section === s.key
            return (
              <button
                key={s.key}
                onClick={() => setSection(s.key)}
                className={`w-full flex items-center justify-between gap-2 text-sm px-3 py-2 rounded-lg text-left transition-colors ${
                  isActive
                    ? 'bg-green-500/10 text-green-400 font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
                }`}
              >
                <span className="truncate">{s.label}</span>
                <span className="flex items-center gap-1 shrink-0">
                  {isSaved && (
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" title="Збережено в БД" />
                  )}
                  {isActive && <ChevronRight size={12} className="text-green-400" />}
                </span>
              </button>
            )
          })}
        </nav>

        <p className="text-xs text-gray-600 mt-4 px-1">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1 align-middle" />
          = є в базі даних
        </p>
      </aside>

      {/* Editor area */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg font-semibold">{sectionLabel}</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              {lang === 'uk' ? 'Українська версія' : 'Чеська версія'}
              {hasSaved ? ' · збережено в БД' : ' · використовуються дефолтні значення'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {error && <p className="text-red-400 text-xs">{error}</p>}
            {saved && (
              <span className="flex items-center gap-1 text-green-400 text-sm">
                <Check size={14} /> Збережено
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black text-sm font-semibold px-5 py-2 rounded-xl transition-colors disabled:opacity-60"
            >
              {saving ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
              Зберегти секцію
            </button>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <SectionForm
            section={section}
            data={currentData[section]}
            onChange={handleSectionChange}
          />
        </div>

        <p className="text-xs text-gray-600 mt-3 text-right">
          Зміни застосовуються на сайті одразу після збереження.
        </p>
      </div>
    </div>
  )
}
