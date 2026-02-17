import Link from "next/link";

export default function MarketingHome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold tracking-tight text-emerald-400">
          KAIROS
        </h1>

        <Link
          href="/vault"
          className="inline-block rounded-lg border border-white/15 px-4 py-2 text-white/80 hover:text-white hover:border-white/30"
        >
          Ir a Vault →
        </Link>
      </div>
    </div>
  );
}