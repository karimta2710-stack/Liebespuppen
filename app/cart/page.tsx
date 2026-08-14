'use client';

export default function Cart() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">🛒 Warenkorb</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-4">
          Warenkorb-Funktionalität wird in Kürze implementiert
        </p>
        <div className="bg-blue-100 border border-blue-300 rounded p-4">
          <h3 className="font-bold mb-2">Geplante Features:</h3>
          <ul className="list-disc list-inside space-y-1 text-blue-900">
            <li>Warenkorb-Verwaltung</li>
            <li>Kasse mit Stripe Integration</li>
            <li>Bestellbestätigung per E-Mail</li>
            <li>Bestellverlauf</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
