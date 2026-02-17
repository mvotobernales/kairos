export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="px-6 py-4 border-b border-white/10">
        <div className="text-sm tracking-widest text-white/70">KAIROS • VAULT</div>
      </header>
      <main className="px-6 py-10">{children}</main>
    </div>
  )
}