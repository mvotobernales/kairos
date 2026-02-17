import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Kairos",
  description: "Luxury watch intelligence platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10">
          <Link href="/" className="text-emerald-400 font-bold text-xl">
            KAIROS
          </Link>

          <div className="space-x-6 text-sm">
            <Link href="/vault" className="hover:text-emerald-400">
              Vault
            </Link>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}