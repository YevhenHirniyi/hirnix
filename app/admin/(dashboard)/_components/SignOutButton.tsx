'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'
import { LogOut } from 'lucide-react'

export function SignOutButton() {
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors w-full px-3 py-2 rounded-lg hover:bg-gray-800"
    >
      <LogOut size={16} />
      Вийти
    </button>
  )
}
