"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import cultoAltisimo from "@/lib/images/CultoAltisimoTV.png";

import collage1 from "@/lib/images/collages-slideshow/1.png";
import collage2 from "@/lib/images/collages-slideshow/2.png";
import collage3 from "@/lib/images/collages-slideshow/3.png";
import collage4 from "@/lib/images/collages-slideshow/4.png";
import collage5 from "@/lib/images/collages-slideshow/5.png";
import collage6 from "@/lib/images/collages-slideshow/6.png";

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
};

const defaultSlides: HeroSlide[] = [
  {
    title: "Bienvenidos a Casa de Oracion",
    image: cultoAltisimo,
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
    image: collage6,
  },
];

export function HeroSlideshow({ slides = defaultSlides }: HeroSlideshowProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [imageRatios, setImageRatios] = React.useState<Record<string, number>>({});
  const activeImage = slides[current]?.image;
  const aspectRatio = typeof activeImage === "object"
    ? activeImage.width / activeImage.height
    : imageRatios[activeImage ?? ""] ?? 1280 / 800;

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
    <section>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
      >
        <CarouselContent className="ml-0" style={{ aspectRatio }}>
          {slides.map((slide, index) => (
            <CarouselItem className="h-full pl-0" key={typeof slide.image === "string" ? slide.image : slide.image.src}>
              <div className="relative h-full overflow-hidden bg-black">
                <Image
                  src={slide.image}
                  alt={slide.alt?.trim() || slide.title?.trim() || `Casa de Oracion Camino Al Cielo - imagen ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority={index === 0}
                  onLoad={(event) => {
                    if (typeof slide.image !== "string") return;
                    const image = event.currentTarget;
                    const ratio = image.naturalWidth / image.naturalHeight;
                    if (Number.isFinite(ratio) && ratio > 0) {
                      setImageRatios((previous) => ({ ...previous, [slide.image as string]: ratio }));
                    }
                  }}
                />
                {(slide.title || slide.subtitle) && (
                  <div className="pointer-events-none absolute inset-0 bg-black/45" />
                )}
                {(slide.title || slide.subtitle) && (
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
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
