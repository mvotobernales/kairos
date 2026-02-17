import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold tracking-tight text-emerald-400">KAIROS</h1>

        <Link
          href="/vault"
          className="inline-block rounded-lg border border-white/15 px-4 py-2 text-white"
        >
          Ir a Vault →
        </Link>
      </div>
    </main>
  );
}