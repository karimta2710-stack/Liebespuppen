# Liebespuppen Online-Shop

🎮 Online-Shop für sehr realistische Pokémon Puppen - Unikate

## Features

- 🛍️ Moderne Shop-Oberfläche mit Next.js
- 💳 Sichere Zahlungsabwicklung mit Stripe
- 📱 Responsive Design für Mobile & Desktop
- 🖼️ Hochwertige Produktbilder
- 🔍 Produktsuche und Filter
- 📦 Bestellverwaltung

## Voraussetzungen

- Node.js 18+
- npm oder yarn
- Stripe API Keys (für Zahlungen)

## Installation

```bash
# Dependencies installieren
npm install

# Umgebungsvariablen setzen
cp .env.example .env.local

# Entwicklungsserver starten
npm run dev
```

Der Shop läuft dann unter [http://localhost:3000](http://localhost:3000)

## Struktur

```
├── app/                    # Next.js App Router
├── components/             # React Komponenten
├── lib/                    # Utilities & API
├── public/                 # Statische Assets
└── styles/                 # Tailwind CSS
```

## Lizenz

MIT
