import { Pill, Syringe, Bandage, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

const INVENTORY = [
  { id: 1, name: 'Paracetamol 500mg', type: 'Tablet', icon: Pill, stock: 120, usage: 'Fever, mild pain' },
  { id: 2, name: 'Ibuprofen 200mg', type: 'Tablet', icon: Pill, stock: 60, usage: 'Pain, inflammation' },
  { id: 3, name: 'ORS Sachet', type: 'Sachet', icon: Syringe, stock: 200, usage: 'Dehydration' },
  { id: 4, name: 'Antiseptic Solution', type: 'Liquid', icon: Bandage, stock: 45, usage: 'Wound cleaning' },
  { id: 5, name: 'Cotton Roll', type: 'Supply', icon: Bandage, stock: 80, usage: 'Dressing' },
  { id: 6, name: 'Band-aids', type: 'Supply', icon: Bandage, stock: 300, usage: 'Minor cuts' },
];

export default function Inventory() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return INVENTORY;
    return INVENTORY.filter((i) =>
      i.name.toLowerCase().includes(q) || i.type.toLowerCase().includes(q) || i.usage.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="inventory" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Available inventory</h2>
          <p className="mt-1 text-sm text-gray-600">Search medicines and supplies currently in stock.</p>
        </div>
        <div className="hidden text-sm text-gray-500 sm:block">Updated daily</div>
      </div>

      <div className="relative mb-6">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, type, or usage..."
          className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none ring-emerald-500 transition focus:border-emerald-300"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="rounded-xl border border-emerald-100 bg-white p-4 shadow-sm transition hover:shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-emerald-700">{item.stock}</p>
                  <p className="text-[11px] text-gray-500">in stock</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600">{item.usage}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
