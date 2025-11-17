  # Mumbai International Airport — Frontend

This repository contains the frontend for the Mumbai International Airport demo site. Built with React + Vite + TypeScript, Tailwind CSS, and shadcn/ui components.

## Quick Start

```powershell
git clone https://github.com/Pranshul8050/airport-final.git
cd airport-final
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) to view in the browser.

## Project Structure

- `src/` — React source code and components
- `src/components/` — Reusable UI components (Navbar, Footer, modals, etc.)
- `src/pages/` — Route-specific page components
- `src/assets/` — Images and static assets
- `supabase/functions/` — Supabase Edge Functions for backend services

## Available Scripts

- `npm run dev` — Start development server (port 8080)
- `npm run build` — Build production bundle
- `npm run preview` — Preview production build locally
- `npm run test` — Run Vitest tests
- `npm run lint` — Run ESLint on all TypeScript files

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Routing**: React Router v6
- **State Management**: TanStack React Query
- **Forms**: React Hook Form + Zod validation
- **Backend**: Supabase (database + edge functions)

## Production Build

```powershell
npm run build
npm run preview
```

The build artifacts will be in the `dist/` folder.

## Contributing

This is a standalone project. All contributions are tracked under the repository owner.
