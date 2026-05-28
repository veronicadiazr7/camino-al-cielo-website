import Image from "next/image";
import Link from "next/link";
import {
  Church,
  Heart,
  HandHelping,
  House,
  MapPin,
  Send,
  Users,
} from "lucide-react";

import cultoAltisimo from "@/lib/images/CultoAltisimoTV.png";
import ministerioJovenes from "@/lib/images/ministerio-jovenes/ministerio-jovenes.jpg";

import { Card, CardContent } from "../components/ui/card";

const values = [
  {
    title: "Ama",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: Heart,
  },
  {
    title: "Restaura",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: Users,
  },
  {
    title: "Discipula",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: HandHelping,
  },
  {
    title: "Envia",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: Send,
  },
];

export default function QuienesSomosPage() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[72svh] min-h-[560px] w-full">
          <Image
            src={cultoAltisimo}
            alt="Interior de la iglesia"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,35,0.35)_0%,rgba(20,14,49,0.72)_60%,rgba(20,14,49,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,130,255,0.25),transparent_42%)]" />
        </div>

        <div className="absolute inset-x-0 bottom-0 mx-auto flex w-full max-w-6xl px-6 pb-14 sm:px-10 lg:px-16 lg:pb-20">
          <div className="max-w-2xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
              Camino al Cielo Casa de Oración
            </p>
            {/* <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Fundada en Fe
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/86 sm:text-lg sm:leading-8">
              Un refugio para los quebrantados, un hogar para los que buscan, y una
              comunidad caminando juntos hacia el cielo.
            </p> */}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
        <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Card
            variant="noBorder"
            className="rounded-[2rem] bg-tertiary-50 p-8 shadow-none sm:p-10 lg:p-12"
          >
            <CardContent className="px-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-primary-600">
                Nuestra Misión
              </p>
              <p className="mt-6 text-3xl font-medium leading-tight tracking-[-0.04em] text-secondary-900 sm:text-4xl lg:text-5xl">
                Nuestra misión está basada en <i>Mateo 28:19</i>:
              </p>
              <blockquote className="mt-7 border-l-2 border-primary-600 pl-5">
                <p className="text-2xl font-medium leading-tight tracking-[-0.04em] text-secondary-900 sm:text-3xl">
                  “Por tanto, id y haced discípulos a todas las naciones,
                  bautizándolos en el nombre del Padre, del Hijo y del Espíritu
                  Santo.”
                </p>
              </blockquote>
              <p className="mt-8 max-w-3xl text-base leading-8 text-secondary-700 sm:text-lg">
                Nos comprometemos a cumplir este llamado formando discípulos,
                compartiendo el evangelio y guiando a las personas a una
                relación genuina con Cristo.
              </p>
            </CardContent>
          </Card>

          <div className="grid min-h-[360px]">
            <Card
              variant="noBorder"
              className="overflow-hidden rounded-[2rem] bg-primary-50 p-0 shadow-none"
            >
              <div className="relative h-full min-h-[360px]">
                <Image
                  src={ministerioJovenes}
                  alt="Comunidad de la iglesia"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary-600">
             Visión
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-secondary-900 sm:text-4xl">
              La visión de la casa se resume en <i>ARDE</i>:
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <Card
                  key={value.title}
                  variant="noBorder"
                  className="rounded-[2rem] bg-secondary-50 p-8 text-center shadow-none"
                >
                  <CardContent className="flex flex-col items-center px-0">
                    <div className="flex size-14 items-center justify-center rounded-full bg-white text-primary-700 shadow-sm">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-secondary-900">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-secondary-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-tertiary-900/20 via-primary-700/60 to-tertiary-900 px-6 py-12 sm:px-10 sm:py-12 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Card
            variant="noBorder"
            className="rounded-[2.25rem] bg-primary-700 p-8 text-white shadow-none sm:p-10 lg:p-12"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/70">
                  Ven como eres
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Ya sea que seas nuevo o buscando una iglesia, nuestras puertas están abiertas.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/82">
                  Experimenta la presencia de Dios con nosotros este domingo y encuentra una
                  comunidad lista para recibirte con los brazos abiertos.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:min-w-[220px]">
                <Link
                  href="/eventos"
                  className="rounded-xl border border-white/20 bg-white px-5 py-3 text-center text-sm font-semibold text-primary-700 transition hover:bg-primary-50"
                >
                  Planifica tu visita
                </Link>
                <Link
                  href="/eventos"
                  className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Ve nuestra transmisión en vivo
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-6 pb-16 pt-4 sm:px-10 lg:px-16 lg:pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_1fr]">
          <Card
            variant="noBorder"
            className="rounded-[2rem] bg-tertiary-50 p-8 shadow-none"
          >
            <CardContent className="px-0">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary-600">
                Casa de Oración Camino Al Cielo 
              </p>
              <div className="mt-6 space-y-4 text-secondary-700">
                <div className="flex gap-3">
                  <MapPin className="mt-1 size-4 text-primary-600" />
                  <p className="text-base leading-7">
                    C. Muñoz Rivera edificio #7
                    <br />
                    Fajardo, 00738
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Church className="mt-1 size-4 text-primary-600" />
                  <p className="text-base leading-7">
                    Servicios los Domingos a las 10:00 AM
                    <br />
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            variant="noBorder"
            className="rounded-[2rem] bg-secondary-50 p-8 text-secondary-900 shadow-none"
          >
            <CardContent className="px-0">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-secondary-600">
                Lo que puedes esperar
              </p>
              <div className="mt-6 space-y-4 text-base leading-8 text-secondary-900">
                <p className="flex gap-3 items-center">
                  <House className="mt-1 size-4 shrink-0 text-secondary-900" />
                  Un ambiente de amor y bienvenida para todas las generaciones.
                </p>
                <p className="flex gap-3">
                  <Users className="mt-1 size-4 shrink-0 text-secondary-900" />
                  Adoración, enseñanza bíblica y espacio para construir una comunidad real.
                </p>
                <p className="flex gap-3 items-center">
                  <Send className="mt-1 size-4 shrink-0 text-secondary-900" />
                  Espacio para conocer a Dios y tomar el siguiente paso en la fe.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
