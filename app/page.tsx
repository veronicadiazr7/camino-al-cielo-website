import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Church,
  HeartHandshake,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

import cultoAltisimo from "@/lib/images/CultoAltisimoTV.png";
import ministerioJovenes from "@/lib/images/ministerio-jovenes/ministerio-jovenes.jpg";
import ministerioNinos from "@/lib/images/ministerio-ninos/ministerio-ninos-1.jpeg";

import { CardSection } from "./components/CardSection";
import { HeroSlideshow } from "./components/HeroSlideshow";
import { ImageCard } from "./components/ImageCard";
import { Card, CardContent } from "./components/ui/card";

const serviceHighlights = [
  {
    label: "Servicio principal",
    value: "Domingo",
    detail: "10:00 AM",
    icon: Church,
  },
  {
    label: "Estudio y oracion",
    value: "Miercoles",
    detail: "7:00 PM",
    icon: CalendarDays,
  },
  {
    label: "Una casa para todos",
    value: "Familia",
    detail: "Ninos, jovenes y adultos",
    icon: Users,
  },
];

const nextSteps = [
  {
    title: "Conoce la casa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae arcu sed justo facilisis interdum.",
    href: "/quienes-somos",
    icon: Church,
  },
  {
    title: "Encuentra comunidad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non libero vitae ipsum gravida laoreet.",
    href: "/ministerios",
    icon: HeartHandshake,
  },
  {
    title: "Vive lo proximo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum, mauris at luctus luctus.",
    href: "/eventos",
    icon: Sparkles,
  },
];

export default function Home() {
  return (
    <>
      <HeroSlideshow />

      <section className="bg-white px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b79a59]">
              Casa de Oracion Camino Al Cielo
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-secondary-900 sm:text-5xl">
              Una familia que ama, restaura, discipula y envia.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-secondary-600 sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quienes-somos"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-800"
              >
                Conocenos
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/eventos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-secondary-200 bg-white px-5 py-3 text-sm font-semibold text-secondary-900 transition hover:border-[#c9a85f] hover:text-[#9c7b32]"
              >
                Ver eventos
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {serviceHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.label}
                  variant="noBorder"
                  className="rounded-2xl border border-secondary-100 bg-[#f8f8fa] p-6 shadow-none"
                >
                  <CardContent className="flex items-center gap-5 px-0">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-primary-700 shadow-sm">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-500">
                        {item.label}
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-secondary-900">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm text-secondary-600">
                        {item.detail}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CardSection
        items={[
          {
            eyebrow: "Mision",
            title: "Somos una Iglesia que A.R.D.E.",
            description: "Ama, restaura, discipula y envia.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra, neque vitae facilisis pretium, arcu augue luctus lectus.",
            imageSrc: "/images/hero-placeholder-2.svg",
            imageAlt: "Mensaje destacado",
            imagePosition: "right",
            ctaLabel: "Ver mas",
            ctaHref: "/quienes-somos",
          },
          {
            eyebrow: "Ministerios",
            title: "Cada miembro, un proposito en Cristo",
            description: "Encuentra tu lugar para crecer y servir.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim libero non urna suscipit, vitae blandit lectus cursus.",
            imageSrc: "/images/collage-logo-ministerios.png",
            imageAlt: "Ministerios logo",
            imageFit: "contain",
            imagePosition: "left",
            ctaLabel: "Ver ministerios",
            ctaHref: "/ministerios",
            backgroundColor: "bg-white",
            titleColor: "text-secondary-900",
            contentColor: "text-secondary-600",
            descriptionColor: "text-secondary-600",
          },
        ]}
      />

      <section className="bg-[#f8f8fa] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b79a59]">
              Vida en comunidad
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-secondary-900 sm:text-4xl">
              Espacios para cada etapa de la familia.
            </h2>
            <p className="mt-4 text-base leading-8 text-secondary-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <ImageCard
              eyebrow="Adoracion"
              title="Cultos y reuniones"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in tellus et turpis porta posuere."
              imageSrc={cultoAltisimo}
              imageAlt="Culto en Casa de Oracion Camino Al Cielo"
              href="/eventos"
              ctaLabel="Ver calendario"
              className="bg-white"
            />
            <ImageCard
              eyebrow="Jovenes"
              title="Generacion que ARDE"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed leo in justo fermentum."
              imageSrc={ministerioJovenes}
              imageAlt="Ministerio de jovenes"
              href="/ministerios#youth"
              ctaLabel="Conocer mas"
              className="bg-white"
            />
            <ImageCard
              eyebrow="Ninos"
              title="Semillas que Arden"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed mi a sem feugiat aliquet."
              imageSrc={ministerioNinos}
              imageAlt="Ministerio de ninos"
              href="/ministerios#niños"
              ctaLabel="Conocer mas"
              className="bg-white"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {nextSteps.map((step) => {
              const Icon = step.icon;

              return (
                <Card
                  key={step.title}
                  variant="noBorder"
                  className="rounded-2xl border border-secondary-100 bg-white p-7 shadow-none transition hover:border-primary-100 hover:bg-primary-50/40"
                >
                  <CardContent className="px-0">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-secondary-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-secondary-600">
                      {step.description}
                    </p>
                    <Link
                      href={step.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary-700"
                    >
                      Ver mas
                      <ArrowRight className="size-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#101217] px-6 py-12 text-white sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#c9a85f]">
              <MapPin className="size-4" />
              Visitanos
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Queremos recibirte en casa.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tempor, erat et bibendum porta, sapien erat tincidunt lorem, vitae
              interdum justo neque sed arcu.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <iframe
              title="Mapa de Casa de Oracion Camino Al Cielo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3787.464996780629!2d-65.65216699999999!3d18.326058800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0497004916823f%3A0x6bf37951da0ecec9!2sIglesia%20casa%20de%20oraci%C3%B3n%20camino%20al%20cielo!5e0!3m2!1sen!2spr!4v1774121559428!5m2!1sen!2spr"
              width="100%"
              height="400"
              loading="lazy"
              className="block"
            />
          </div>
        </div>
      </section>
    </>
  );
}
