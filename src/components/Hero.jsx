import { Calendar, ClipboardList, Phone, Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-emerald-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-16 sm:pt-12 lg:flex lg:items-center lg:gap-10 lg:pt-16 lg:pb-24">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-emerald-700 backdrop-blur">
            <span className="inline-flex items-center gap-1 text-xs font-medium">
              <Calendar className="h-3.5 w-3.5" />
              Open 9am – 6pm (Mon–Sat)
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            BIT Dispensary
            <span className="block text-emerald-600">Care. Supplies. Support.</span>
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Official college dispensary for first aid, basic medicines, and essential supplies.
            Quick access, verified stock, and student-friendly service.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#request"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <ClipboardList className="mr-2 h-4 w-4" />
              Make a request
            </a>
            <a
              href="#inventory"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
            >
              <Search className="mr-2 h-4 w-4" />
              View inventory
            </a>
            <a
              href="tel:+0000000000"
              className="inline-flex items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-emerald-700 hover:text-emerald-800"
            >
              <Phone className="mr-2 h-4 w-4" />
              Emergency
            </a>
          </div>
        </div>

        <div className="mt-10 flex w-full justify-center lg:mt-0 lg:w-[48%]">
          <div className="relative h-72 w-full max-w-md overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm sm:h-80 md:h-96">
            <div className="absolute -left-16 -top-10 h-40 w-40 rounded-full bg-emerald-200/60 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-16 -right-12 h-44 w-44 rounded-full bg-emerald-300/50 blur-2xl" aria-hidden="true" />
            <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1585179297672-2f3dfce48412?q=80&w=1200&auto=format&fit=crop"
                alt="College dispensary"
                className="h-40 w-40 rounded-xl object-cover shadow md:h-48 md:w-48"
              />
              <dl className="mt-6 grid w-full grid-cols-3 gap-4 text-xs text-gray-600">
                <div className="rounded-lg border border-gray-200 bg-white p-3">
                  <dt className="font-semibold text-gray-900">Avg. wait</dt>
                  <dd className="mt-1 text-emerald-700">5–10 min</dd>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-3">
                  <dt className="font-semibold text-gray-900">Fulfilled</dt>
                  <dd className="mt-1 text-emerald-700">1.2k+ req</dd>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-3">
                  <dt className="font-semibold text-gray-900">Satisfaction</dt>
                  <dd className="mt-1 text-emerald-700">4.9/5</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
