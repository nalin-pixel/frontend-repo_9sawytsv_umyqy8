import { useState } from 'react';
import { ClipboardCheck, Loader2 } from 'lucide-react';

export default function RequestForm() {
  const [form, setForm] = useState({ name: '', id: '', item: '', details: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', id: '', item: '', details: '' });
    setTimeout(() => setSubmitted(false), 2500);
  }

  const disabled = !form.name || !form.id || !form.item || submitting;

  return (
    <section id="request" className="mx-auto max-w-2xl px-6 pb-20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Make a request</h2>
        <p className="mt-1 text-sm text-gray-600">Submit your details to reserve an item for pickup.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none ring-emerald-500 transition focus:border-emerald-300"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">College ID</label>
            <input
              name="id"
              value={form.id}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none ring-emerald-500 transition focus:border-emerald-300"
              placeholder="e.g., BIT23CSE001"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Requested item</label>
          <input
            name="item"
            value={form.item}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none ring-emerald-500 transition focus:border-emerald-300"
            placeholder="e.g., Paracetamol 500mg"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Notes (optional)</label>
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none ring-emerald-500 transition focus:border-emerald-300"
            placeholder="Symptoms, allergies, or other details"
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">We’ll notify you when it’s ready for pickup. In emergencies, please call directly.</p>
          <button
            disabled={disabled}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <ClipboardCheck className="h-4 w-4" />}
            Submit request
          </button>
        </div>

        {submitted && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
            Request submitted! You’ll receive a confirmation soon.
          </div>
        )}
      </form>
    </section>
  );
}
