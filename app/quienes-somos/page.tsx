import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Church,
  Heart,
  HandHelping,
  House,
  MapPin,
  Send,
  Users,
} from "lucide-react";

import congregacionAdorando from "@/lib/images/about/congregacion-adorando.png";
import abrazoComunidad from "@/lib/images/about/abrazo-comunidad.png";
import acompanamiento from "@/lib/images/about/acompanamiento.png";
import adoracion from "@/lib/images/about/adoracion.png";
import ministerioJovenes from "@/lib/images/ministerio-jovenes/ministerio-jovenes.jpg";

import styles from "./about.module.css";

import { PastoresSection } from "../components/PastoresSection";
import { Card, CardContent } from "../components/ui/card";

const values = [
  {
    title: "Ama",
    description: "Reflejar el amor de Dios en cada persona y familia.",
    icon: Heart,
  },
  {
    title: "Restaura",
    description: "Acompañar vidas hacia sanidad, identidad en Cristo y esperanza.",
    icon: Users,
  },
  {
    title: "Discipula",
    description: "Formar creyentes firmes, maduros e íntegros.",
    icon: HandHelping,
  },
  {
    title: "Envía",
    description: "Equipar y encaminar a cada creyente para cumplir el llamado ministerial que Dios le ha encomendado.",
    icon: Send,
  },
];

export default function QuienesSomosPage() {
  return (
    <div className="bg-white">
      <div className={styles.editorial}>
        <section aria-labelledby="about-heading" className="bg-[#fbfaf7] px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary-700">Quiénes somos</p>
              <h1 id="about-heading" className={`${styles.serif} mt-6 text-5xl font-bold leading-[1.08] tracking-[-0.045em] text-secondary-900 sm:text-6xl lg:text-[4.25rem]`}>
                Un lugar para crecer, servir y vivir <em className="whitespace-nowrap underline decoration-[#c9a85f]/60 decoration-2 underline-offset-8">la fe.</em>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-8 text-[#625c53] sm:text-lg">
                Somos una casa de oración, adoración y esperanza, comprometida con conocer a Cristo, formar discípulos y servir a nuestra comunidad.
              </p>
              <a href="#nuestra-mision" className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary-700 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-700">
                Conoce nuestra misión <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>
            <div className="relative isolate mx-auto aspect-[1.04] w-full max-w-xl" role="group" aria-label="Nuestra comunidad de fe">
              <span aria-hidden="true" className="absolute left-[2%] top-[3%] size-16 rounded-full border border-[#c9a85f]/60 sm:size-24" />
              <span aria-hidden="true" className="absolute bottom-[5%] right-[2%] h-20 w-16 rounded-br-[2rem] bg-primary-700/10" />
              <div className="absolute left-[15%] top-0 h-[47%] w-[53%] overflow-hidden rounded-[1.5rem]">
                <Image src={congregacionAdorando} alt="Congregación adorando con las manos levantadas" fill priority sizes="(min-width: 1024px) 290px, 50vw" className="object-cover" />
              </div>
              <div className="absolute right-0 top-[14%] h-[49%] w-[35%] overflow-hidden rounded-[1.5rem] border-4 border-[#fbfaf7]">
                <Image src={abrazoComunidad} alt="Un abrazo de apoyo entre miembros de la comunidad" fill sizes="(min-width: 1024px) 200px, 35vw" className="object-cover" />
              </div>
              <div className="absolute bottom-[4%] left-0 z-10 h-[47%] w-[58%] overflow-hidden rounded-[1.5rem] border-4 border-[#fbfaf7]">
                <Image src={acompanamiento} alt="Dos mujeres acompañándose durante el servicio" fill sizes="(min-width: 1024px) 320px, 55vw" className="object-cover" />
              </div>
              <div className="absolute bottom-0 right-[7%] h-[34%] w-[33%] overflow-hidden rounded-[1.5rem] border-4 border-[#fbfaf7]">
                <Image src={adoracion} alt="Una mujer con las manos levantadas en adoración" fill sizes="(min-width: 1024px) 180px, 32vw" className="object-cover" />
              </div>
              <span aria-hidden="true" className="absolute bottom-[1%] left-[6%] z-20 h-1 w-16 rounded-full bg-[#c9a85f]" />
            </div>
          </div>
        </section>

        <section id="nuestra-mision" aria-labelledby="mission-heading" className="scroll-mt-10 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary-700">Nuestra misión</p>
              <h2 id="mission-heading" className={`${styles.serif} mt-4 text-4xl font-bold leading-[1.15] tracking-[-0.03em] text-secondary-900 sm:text-5xl`}>Llamados a hacer discípulos.</h2>
              <p className="mt-5 text-base leading-8 text-[#625c53]">Nuestra misión nace de la Gran Comisión de Jesús en Mateo 28:19.</p>
              <blockquote className="mt-7 border-l-2 border-primary-700 pl-6">
                <p className={`${styles.serif} text-xl leading-8 text-secondary-900 sm:text-2xl sm:leading-9`}>
                  “Por tanto, id y haced discípulos a todas las naciones,
                  bautizándolos en el nombre del Padre, del Hijo y del Espíritu
                  Santo.”
                </p>
                <cite className="mt-4 block text-xs font-semibold not-italic uppercase tracking-[0.2em] text-primary-700">Mateo 28:19</cite>
              </blockquote>
              <p className="mt-7 text-base leading-8 text-[#625c53]">
                Nos comprometemos a cumplir este llamado formando discípulos,
                compartiendo el evangelio y guiando a las personas a una
                relación genuina con Cristo.
              </p>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] sm:aspect-[4/3]">
              <Image src={ministerioJovenes} alt="Nuestra comunidad reunida en la iglesia" fill sizes="(min-width: 1024px) 544px, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section aria-labelledby="vision-heading" className="bg-[#fbfaf7] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary-700">Nuestra visión</p>
              <h2 id="vision-heading" className={`${styles.serif} mt-4 text-4xl font-bold leading-[1.15] tracking-[-0.03em] text-secondary-900 sm:text-5xl`}>
                Una visión que <em className="text-[#90702f]">ARDE</em> en nuestros corazones.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#625c53]">Cuatro principios que guían nuestra manera de amar, servir y cumplir el llamado de Dios.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} variant="noBorder" className="h-full gap-0 rounded-[1.75rem] bg-[#f0ece3] p-6 text-center shadow-none motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1 lg:px-5 lg:py-8">
                    <CardContent className="flex flex-col items-center px-0">
                      <div className="flex items-center justify-center text-primary-700" aria-hidden="true">
                        <span className="flex size-10 items-center justify-center rounded-full bg-white/80"><Icon className="size-5" /></span>
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-secondary-900">{value.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#625c53]">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <PastoresSection />

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
                  href="https://www.facebook.com/casadeoracion.caminocieloceiba/"
                  className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                Visita nuestro Facebook
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
