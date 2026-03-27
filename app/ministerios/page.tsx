import { ArrowRight, HeartHandshake, Music4, Sparkles, Users } from "lucide-react";

import { HeroSlideshow } from "../components/HeroSlideshow";
import { ImageCard } from "../components/ImageCard";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const ministries = [
  {
    id: "niños",
    title: "Ministerio de Niños",
    description:
      "Building a foundation of faith through play, stories, and discovery for our youngest members.",
    imageSrc: "/images/hero-placeholder-1.svg",
    imageAlt: "Children ministry",
    href: "#children",
  },
  {
    id: "youth",
    title: "Generación Que ARDE",
    description:
      "Ministerio de Jóvenes ",
    imageSrc: "/images/hero-placeholder-2.svg",
    imageAlt: "Youth ministry",
    href: "#youth",
  },
  {
    id: "families",
    title: "Matrimonios",
    description:
      "Creating space for parents and families to pray, learn, and serve together through every season of life.",
    imageSrc: "/images/hero-placeholder-3.svg",
    imageAlt: "Family ministry",
    href: "#families",
  },
  {
    id: "worship",
    title: "Adoración",
    description:
      "A ministry for musicians, vocalists, and creatives who want to lead the church in heartfelt worship.",
    imageSrc: "/images/CultoAltisimoTV.png",
    imageAlt: "Worship ministry",
    href: "#worship",
    imageClassName: "bg-[#d4d1df]",
  },
];

const connectionSteps = [
  {
    title: "Visit a ministry gathering",
    description:
      "Come as you are, meet the leaders, and get a feel for the rhythm of the group before you commit.",
    icon: Users,
  },
  {
    title: "Meet the team",
    description:
      "We’ll help you find the best fit based on your season of life, gifts, and the kind of community you need.",
    icon: HeartHandshake,
  },
  {
    title: "Take your next step",
    description:
      "From serving opportunities to discipleship rhythms, we’ll help you move from attending to belonging.",
    icon: Sparkles,
  },
];

const highlights = [
  {
    label: "Weekly gatherings",
    value: "4+",
  },
  {
    label: "Volunteer teams",
    value: "12",
  },
  {
    label: "Age groups served",
    value: "All",
  },
];

export default function MinisteriosPage() {
  return (
    <main className="bg-white">
      <HeroSlideshow />

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-500">
              Ministerios
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-secondary-900 sm:text-5xl lg:text-6xl">
            Un lugar para que cada generación crezca, pertenezca y sirva. Encuentra tu comunidad.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <Card
            variant="noBorder"
            className="rounded-[2rem] border border-primary-100 bg-primary-50 p-8 shadow-none"
          >
            <CardHeader className="px-0 pt-0">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm">
                <Music4 className="size-6" />
              </div>
              <CardTitle className="text-2xl text-primary-700">
                Encuentra tu lugar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-0 text-secondary-700">
              <p className="text-base leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <a
                href="#ministry-grid"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600"
              >
                Ver más
                <ArrowRight className="size-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        id="ministry-grid"
        className="bg-[#f8f8fa] px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-500">
                Ministerios de la casa
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-secondary-900 sm:text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-secondary-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {ministries.map((ministry) => (
              <div id={ministry.id} key={ministry.id}>
                <ImageCard {...ministry} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-500">
              How to get connected
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-secondary-900 sm:text-4xl">
              Start with one simple yes.
            </h2>
            <p className="text-lg leading-8 text-secondary-600">
              We want joining a ministry to feel personal and clear. Here is a
              simple journey we can use as placeholder content until the final
              ministry details are ready.
            </p>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {highlights.map((item) => (
                <Card
                  key={item.label}
                  variant="noBorder"
                  className="rounded-[1.75rem] bg-[#f7f7f8] p-6 shadow-none"
                >
                  <CardContent className="px-0">
                    <p className="text-3xl font-semibold text-primary-700">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-secondary-500">
                      {item.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {connectionSteps.map((step) => {
              const Icon = step.icon;

              return (
                <Card
                  key={step.title}
                  variant="roundedBorder"
                  className="rounded-[2rem] border-secondary-100 bg-white p-8 shadow-none"
                >
                  <CardContent className="flex gap-5 px-0">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-900">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-secondary-600">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-16 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <Card
            variant="noBorder"
            className="overflow-hidden rounded-[2.5rem] bg-secondary-900 px-8 py-10 text-white shadow-none sm:px-12 sm:py-14"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-300">
                  Ready to serve?
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  We can turn this into a full ministry landing page next.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78">
                  If you want, the next step can be adding real ministry data,
                  leader bios, schedules, and dedicated pages for each group.
                </p>
              </div>

              <a
                href="/eventos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-secondary-900 transition hover:bg-primary-50"
              >
                View events
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
