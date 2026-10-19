'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { Pencil, Trash2, Plus, Check, X } from 'lucide-react'

type ContentItem = {
  id: string
  key: string
  label: string
  value: string
  updated_at: string
}

export function ContentEditor({ initialItems }: { initialItems: ContentItem[] }) {
  const [items, setItems] = useState<ContentItem[]>(initialItems)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState('')
  const [editLabel, setEditLabel] = useState('')
  const [adding, setAdding] = useState(false)
  const [newKey, setNewKey] = useState('')
  const [newLabel, setNewLabel] = useState('')
  const [newValue, setNewValue] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const supabase = createClient()

  function startEdit(item: ContentItem) {
    setEditingId(item.id)
    setEditValue(item.value)
    setEditLabel(item.label)
  }

  async function saveEdit(item: ContentItem) {
    setSaving(true)
    setError('')
    const { error } = await supabase
      .from('site_content')
      .update({ value: editValue, label: editLabel, updated_at: new Date().toISOString() })
      .eq('id', item.id)

    if (error) {
      setError(error.message)
    } else {
      setItems((prev) =>
        prev.map((i) =>
          i.id === item.id
            ? { ...i, value: editValue, label: editLabel, updated_at: new Date().toISOString() }
            : i
        )
      )
      setEditingId(null)
    }
    setSaving(false)
  }

  async function deleteItem(id: string) {
    if (!confirm('Видалити цей запис?')) return
    const { error } = await supabase.from('site_content').delete().eq('id', id)
    if (error) {
      setError(error.message)
    } else {
      setItems((prev) => prev.filter((i) => i.id !== id))
    }
  }

  async function addItem() {
    if (!newKey.trim() || !newLabel.trim() || !newValue.trim()) return
    setSaving(true)
    setError('')
    const { data, error } = await supabase
      .from('site_content')
      .insert({ key: newKey.trim(), label: newLabel.trim(), value: newValue.trim() })
      .select()
      .single()

    if (error) {
      setError(error.message)
    } else if (data) {
      setItems((prev) => [data, ...prev])
      setNewKey('')
      setNewLabel('')
      setNewValue('')
      setAdding(false)
    }
    setSaving(false)
  }

  return (
    <div>
      {error && (
        <p className="text-red-400 text-sm mb-4 bg-red-950/30 border border-red-900 px-3 py-2 rounded-lg">
          {error}
        </p>
      )}

      <div className="flex justify-end mb-4">
        <button
          onClick={() => setAdding(true)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={14} />
          Додати запис
        </button>
      </div>

      {adding && (
        <div className="bg-gray-900 border border-green-500/30 rounded-xl p-5 mb-4">
          <h3 className="text-sm font-medium text-gray-300 mb-3">Новий запис</h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <input
              placeholder="Ключ (напр. hero.title)"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
              className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg outline-none focus:ring-1 focus:ring-green-500 placeholder-gray-500 font-mono"
            />
            <input
              placeholder="Назва (для відображення)"
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
              className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg outline-none focus:ring-1 focus:ring-green-500 placeholder-gray-500"
            />
          </div>
          <textarea
            placeholder="Значення"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            rows={3}
            className="w-full bg-gray-800 text-white text-sm px-3 py-2 rounded-lg outline-none focus:ring-1 focus:ring-green-500 placeholder-gray-500 resize-none mb-3"
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => { setAdding(false); setNewKey(''); setNewLabel(''); setNewValue('') }}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <X size={14} />
              Скасувати
            </button>
            <button
              onClick={addItem}
              disabled={saving || !newKey || !newLabel || !newValue}
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-black text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors disabled:opacity-50"
            >
              <Check size={14} />
              Зберегти
            </button>
          </div>
        </div>
      )}

      {!items.length ? (
        <div className="text-center py-16 text-gray-500">
          <p className="mb-2">Записів ще немає.</p>
          <p className="text-sm">Натисніть &quot;Додати запис&quot; щоб створити перший.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4"
            >
              {editingId === item.id ? (
                <div>
                  <input
                    value={editLabel}
                    onChange={(e) => setEditLabel(e.target.value)}
                    className="w-full bg-gray-800 text-white text-sm px-3 py-2 rounded-lg outline-none focus:ring-1 focus:ring-green-500 mb-2"
                  />
                  <textarea
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    rows={3}
                    className="w-full bg-gray-800 text-white text-sm px-3 py-2 rounded-lg outline-none focus:ring-1 focus:ring-green-500 resize-none mb-3"
                  />
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <X size={14} />
                      Скасувати
                    </button>
                    <button
                      onClick={() => saveEdit(item)}
                      disabled={saving}
                      className="flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-black text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors disabled:opacity-50"
                    >
                      <Check size={14} />
                      Зберегти
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-400 text-xs font-mono bg-gray-800 px-2 py-0.5 rounded">
                        {item.key}
                      </span>
                      <span className="text-gray-300 text-sm font-medium">{item.label}</span>
                    </div>
                    <p className="text-white text-sm leading-relaxed line-clamp-2">{item.value}</p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <button
                      onClick={() => startEdit(item)}
                      className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="text-gray-400 hover:text-red-400 p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
