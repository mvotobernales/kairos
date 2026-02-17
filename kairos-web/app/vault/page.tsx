export default function Vault() {
  return (
    <main className="px-8 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold mb-12">Vault</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-neutral-900 rounded-xl p-6">
          <div className="h-48 bg-black rounded-lg mb-4"></div>
          <h2 className="text-lg font-medium">Rolex Submariner</h2>
          <p className="text-sm text-white/60">40mm · Steel</p>
        </div>

        <div className="bg-neutral-900 rounded-xl p-6">
          <div className="h-48 bg-black rounded-lg mb-4"></div>
          <h2 className="text-lg font-medium">Omega Speedmaster</h2>
          <p className="text-sm text-white/60">42mm · Hesalite</p>
        </div>
      </div>
    </main>
  );
}