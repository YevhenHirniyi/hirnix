import { NavLinks } from './_components/NavLinks'
import { SignOutButton } from './_components/SignOutButton'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      <aside className="w-56 shrink-0 border-r border-gray-800 flex flex-col py-6 px-4">
        <div className="flex items-center gap-2 px-3 mb-8">
          <span className="text-green-400 font-bold text-lg">hirnix</span>
          <span className="text-gray-500 text-xs">admin</span>
        </div>

        <NavLinks />

        <div className="border-t border-gray-800 pt-4">
          <SignOutButton />
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  )
}
