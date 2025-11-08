import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-gray-900">BIT Dispensary</p>
            <p className="mt-2 text-sm text-gray-600">Supporting student health with quick access to first aid and essential medical supplies.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-600" /> +00 0000 000 000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-600" /> dispensary@bit.ac.in</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-600" /> Health Center, Campus</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Hours</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Mon – Sat: 9:00 AM – 6:00 PM</li>
              <li>Sun & Holidays: Emergency only</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-emerald-100 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} BIT Dispensary. All rights reserved.</div>
      </div>
    </footer>
  );
}
