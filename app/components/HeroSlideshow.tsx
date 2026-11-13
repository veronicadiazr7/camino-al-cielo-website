"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import casaDeOracion from "@/lib/images/casa-de-oracion.png"

import collage1 from "@/lib/images/collages-slideshow/desktop-slideshow1.png";
import collage2 from "@/lib/images/collages-slideshow/desktop-slideshow2.png";
import collage3 from "@/lib/images/collages-slideshow/desktop-slideshow3.png";
import collage4 from "@/lib/images/collages-slideshow/desktop-slideshow4.png";
import collage5 from "@/lib/images/collages-slideshow/desktop-slideshow5.png";
import collage6 from "@/lib/images/collages-slideshow/desktop-slideshow6.png";
import collage7 from "@/lib/images/collages-slideshow/desktop-slideshow7.png";
import collage8 from "@/lib/images/collages-slideshow/desktop-slideshow8.png";
import collage9 from "@/lib/images/collages-slideshow/desktop-slideshow9.png";
import collage10 from "@/lib/images/collages-slideshow/desktop-slideshow10.png";
import collage11 from "@/lib/images/collages-slideshow/desktop-slideshow11.png";
import collage12 from "@/lib/images/collages-slideshow/desktop-slideshow12.png";
import collage13 from "@/lib/images/collages-slideshow/desktop-slideshow13.png";


import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

type HeroSlide = {
  image: string | StaticImageData;
  title?: string;
  subtitle?: string;
  alt?: string;
};

type HeroSlideshowProps = {
  slides?: HeroSlide[];
  mobileSlides?: HeroSlide[];
};

const defaultMobileSlides: HeroSlide[] = Array.from({ length: 15 }, (_, index) => ({
  image: `/images/hero-mobile/heromobile-${index + 1}.png`,
  alt: `Vida en Casa de Oracion Camino Al Cielo - foto ${index + 1}`,
}));

const defaultSlides: HeroSlide[] = [
  {
    title: " ",
    image: casaDeOracion,
  },
  {
    image: collage1,
  },
  {
    image: collage2,
  },
  {
    image: collage3,
  },
  {
    image: collage4,
  },
  {
    image: collage5,
  },
  {
    image: collage7,
  },
  {
    image: collage10,
  },
  {
    image: collage11,
  },
  {
    image: collage12,
  },
    {
    image: collage6,
  },
  {
    image: collage8,
  },
  {
    image: collage9,
  },
];

export function HeroSlideshow({
  slides = defaultSlides,
  mobileSlides = defaultMobileSlides,
}: HeroSlideshowProps) {
  return (
    <>
      <div className="md:hidden">
        <HeroCarousel slides={mobileSlides} mobile />
      </div>
      <div className="hidden md:block">
        <HeroCarousel slides={slides} />
      </div>
    </>
  );
}

function HeroCarousel({ slides, mobile = false }: { slides: HeroSlide[]; mobile?: boolean }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const dotCount = Math.min(5, slides.length);
  const activeDot = dotCount ? current % dotCount : 0;
  const dotStart = current - activeDot;
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);

  React.useEffect(() => {
    if (!api || slides.length < 2 || hovered || focused || dragging) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (!document.hidden && !reducedMotion.matches) api.scrollNext();
    }, 3000);

    return () => window.clearInterval(timer);
  }, [api, slides.length, hovered, focused, dragging, current]);

  React.useEffect(() => {
    if (!api) return;

    const updateCurrent = () => setCurrent(api.selectedScrollSnap());
    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  return (
    <section
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
      onPointerDown={() => setDragging(true)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
      onLostPointerCapture={() => setDragging(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
      >
        <CarouselContent className={mobile ? "ml-0 h-[min(45svh,430px)]" : "ml-0 aspect-[4/1] max-h-[430px]"}>
          {slides.map((slide, index) => (
            <CarouselItem className="h-full pl-0" key={typeof slide.image === "string" ? slide.image : slide.image.src}>
              <div className="relative h-full overflow-hidden bg-black">
                {mobile && <Image
                  src={slide.image}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="100vw"
                  className="pointer-events-none scale-110 object-cover blur-2xl brightness-50"
                  priority={index === 0}
                />}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={slide.image}
                    alt={slide.alt?.trim() || slide.title?.trim() || `Casa de Oracion Camino Al Cielo - imagen ${index + 1}`}
                    fill
                    sizes="100vw"
                    className={mobile ? "object-cover object-center" : "object-cover object-center"}
                    priority={index === 0}
                  />
                </div>
                {(slide.title || slide.subtitle) && (
                  <div className="pointer-events-none absolute inset-0 bg-black/45" />
                )}
                {(slide.title || slide.subtitle) && (
                  <div className="absolute inset-x-0 bottom-0 px-5 pb-14 pt-5 text-white sm:px-8 sm:pt-8">
                    {slide.title && (
                      <h2 className="text-xl font-bold sm:text-3xl">{slide.title}</h2>
                    )}
                    {slide.subtitle && (
                      <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
                        {slide.subtitle}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {slides.length > 1 && (
          <>
            <CarouselPrevious className="left-3 border-white/40 bg-black/50 text-white hover:bg-black/70 sm:left-4" />
            <CarouselNext className="right-3 border-white/40 bg-black/50 text-white hover:bg-black/70 sm:right-4" />
          </>
        )}
      {slides.length > 1 && (
      <div className="absolute inset-x-0 bottom-2 z-10 flex justify-center px-2" >
      <div className="flex max-w-full flex-wrap justify-center rounded-full bg-black/45 px-2 backdrop-blur-sm" role="group" aria-label="Seleccionar imagen">
        {Array.from({ length: dotCount }, (_, offset) => {
          const index = (dotStart + offset) % slides.length;
          return (
          <button
            key={offset}
            type="button"
            aria-label={`Ver imagen ${index + 1}`}
            aria-current={activeDot === offset ? "true" : undefined}
            className="flex h-8 w-5 shrink-0 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => api?.scrollTo(index)}
          >
            <span aria-hidden="true" className={`h-1.5 rounded-full transition-all duration-300 ease-in-out motion-reduce:transition-none ${activeDot === offset ? "w-3.5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}`} />
          </button>
          );
        })}
      </div>
      </div>
      )}
      </Carousel>
    </section>
  );
}
