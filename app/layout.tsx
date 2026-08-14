import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Liebespuppen Shop',
  description: 'Online-Shop für realistische Pokémon Puppen',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <nav className="bg-blue-600 text-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">🎮 Liebespuppen</h1>
            <div className="flex gap-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="/shop" className="hover:underline">Shop</a>
              <a href="/cart" className="hover:underline">Warenkorb</a>
            </div>
          </div>
        </nav>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-6 text-center">
          <p>&copy; 2024 Liebespuppen - Alle Rechte vorbehalten</p>
        </footer>
      </body>
    </html>
  );
}
