"use client";

import * as React from "react";
import Image from "next/image";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

const slides = [
  {
    title: "Bienvenidos a Casa de Oracion",
    image: "/images/CultoAltisimoTV.png",
  },
  {
    title: "Adoracion y Palabra",
    subtitle: "Acompananos en nuestros servicios y encuentros semanales.",
    image: "/images/hero-placeholder-2.svg",
  },
  {
    title: "Eventos para Toda la Familia",
    subtitle: "Conecta con ministerios, actividades y oportunidades para servir.",
    image: "/images/hero-placeholder-3.svg",
  },
];

export function HeroSlideshow() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const updateCurrent = () => setCurrent(api.selectedScrollSnap());
    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.title}>
              <div className="relative rounded-2xl md:rounded-none">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1280}
                  height={800}
                  className="h-[260px] w-full object-cover sm:h-[340px] md:h-[430px]"
                  priority
                />
                <div className="absolute inset-0 bg-black/45 lg:py-4" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
                  <h2 className="text-xl font-bold sm:text-3xl">{slide.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-3 border-white/40 bg-black/50 text-white hover:bg-black/70 sm:left-4" />
        <CarouselNext className="right-3 border-white/40 bg-black/50 text-white hover:bg-black/70 sm:right-4" />
      </Carousel>
{/* 
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              current === index ? "w-6 bg-primary-500" : "w-2.5 bg-muted"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div> */}
    </section>
  );
}
