import { FirstAid, Phone, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 text-emerald-700">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <FirstAid className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight">BIT Dispensary</p>
            <p className="text-[11px] text-emerald-700/80">Care • Supplies • Support</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#inventory" className="text-sm font-medium text-gray-700 hover:text-emerald-700">Inventory</a>
          <a href="#request" className="text-sm font-medium text-gray-700 hover:text-emerald-700">Make a request</a>
          <a href="tel:+0000000000" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
            <Phone className="h-4 w-4" /> Emergency
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-emerald-700 hover:bg-emerald-50 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="mx-auto max-w-7xl px-6 pb-4 md:hidden">
          <div className="space-y-2 rounded-lg border border-emerald-100 bg-white p-3 shadow-sm">
            <a href="#inventory" className="block rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50">Inventory</a>
            <a href="#request" className="block rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50">Make a request</a>
            <a href="tel:+0000000000" className="block rounded-md bg-emerald-600 px-2 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-700">Emergency</a>
          </div>
        </div>
      )}
    </header>
  );
}
