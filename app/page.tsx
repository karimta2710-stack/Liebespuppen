import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">🎮 Willkommen bei Liebespuppen</h2>
        <p className="text-xl text-gray-600 mb-8">
          Die realistischsten Pokémon Puppen - Jedes Stück ein Unikat
        </p>
        <Link href="/shop">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Jetzt zum Shop
          </button>
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">✨ Premium Qualität</h3>
          <p>Hochwertige Materialien für realistische Details</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">🎨 Unikate</h3>
          <p>Jede Puppe ist ein Kunstwerk und Einzelstück</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">🚚 Versand</h3>
          <p>Sichere Verpackung & schnelle Lieferung</p>
        </div>
      </section>
    </div>
  );
}
