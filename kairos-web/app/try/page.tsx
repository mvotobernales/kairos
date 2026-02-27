import Link from "next/link"
import { getWatches } from "@/lib/watches"

export default function TryPage() {
  const watches = getWatches()

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-8">Try a Watch</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {watches.map((watch) => (
          <Link
            key={watch.id}
            href={`/try/${watch.id}`}
            className="border border-neutral-200 rounded-lg p-4 hover:border-neutral-400 transition-colors"
          >
            <p className="text-xs text-neutral-500 uppercase tracking-wide">{watch.brand}</p>
            <p className="font-medium text-sm mt-1">{watch.model}</p>
            {watch.reference && (
              <p className="text-xs text-neutral-400 mt-0.5">{watch.reference}</p>
            )}
          </Link>
        ))}
      </div>
    </main>
  )
}
