import Link from "next/link";
import { Church, HeartHandshake, Home, Mail } from "lucide-react";

type ComingSoonProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function ComingSoon({
  eyebrow = "Muy pronto",
  title = "Estamos preparando esta pagina",
  description = "Estamos trabajando en este espacio para servirte mejor. Mientras tanto, puedes regresar al inicio o escribirnos si necesitas ayuda.",
}: ComingSoonProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#faf8f2] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(201,168,95,0.24),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(36,40,204,0.14),transparent_28%),linear-gradient(180deg,#ffffff_0%,#faf8f2_100%)]" />

      <div className="mx-auto grid min-h-[58svh] max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary-500/30 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-secondary-700 shadow-sm">
            <Church className="size-4" aria-hidden="true" />
            {eyebrow}
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-secondary-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-secondary-600 sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
            >
              <Home className="size-4" aria-hidden="true" />
              Ir al inicio
            </Link>
            <Link
              href="mailto:info@coccarde2022@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-secondary-200 bg-white px-5 py-3 text-sm font-semibold text-secondary-900 transition hover:border-secondary-500 hover:text-secondary-700 focus:outline-none focus:ring-2 focus:ring-secondary-500/40"
            >
              <Mail className="size-4" aria-hidden="true" />
              Contactanos
            </Link>
          </div>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-primary-700 shadow-2xl shadow-primary-900/20" />
          <div className="absolute inset-8 rounded-full border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]" />
          <div className="absolute left-8 top-12 size-16 rounded-full bg-secondary-500" />
          <div className="absolute bottom-12 right-10 size-24 rounded-full border border-white/20" />

          <div className="relative flex size-36 items-center justify-center rounded-full bg-white text-primary-700 shadow-xl">
            <HeartHandshake className="size-16" strokeWidth={1.7} aria-hidden="true" />
          </div>

          <div className="absolute bottom-10 left-1/2 w-[78%] -translate-x-1/2 rounded-2xl bg-white/95 px-5 py-4 text-center shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-600">
              Casa de Oracion
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-600">
              Camino Al Cielo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
