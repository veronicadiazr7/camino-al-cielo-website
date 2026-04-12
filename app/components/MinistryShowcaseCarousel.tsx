"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/components/ui/carousel";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type MinistrySlide = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  ctaLabel?: string;
  imageClassName?: string;
};

type MinistryShowcaseCarouselProps = {
  slides: MinistrySlide[];
  className?: string;
};

export function MinistryShowcaseCarousel({
  slides,
  className,
}: MinistryShowcaseCarouselProps) {
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
    <div className={cn("mx-auto w-full max-w-[36rem]", className)}>
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <Card
                variant="noBorder"
                className="group h-full rounded-[2rem] border-0 bg-[#f7f7f8] p-7 shadow-none sm:p-10"
              >
                <div className="flex h-full flex-col gap-8">
                  <div
                    className={cn(
                      "relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#d9d9dc]",
                      slide.imageClassName
                    )}
                  >
                    <Image
                      src={slide.imageSrc}
                      alt={slide.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 36rem, (min-width: 768px) 70vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-3xl font-semibold tracking-[-0.03em] text-primary-700">
                        {slide.title}
                      </CardTitle>
                      <CardDescription className="max-w-[24ch] text-lg leading-8 text-secondary-700">
                        {slide.description}
                      </CardDescription>
                    </CardHeader>

                    {slide.href ? (
                      <CardContent className="mt-auto px-0">
                        <Link
                          href={slide.href}
                          className="inline-flex items-center gap-2 text-xl font-semibold text-primary-700 transition-transform duration-200 group-hover:translate-x-1"
                        >
                          {slide.ctaLabel ?? "Ver ministerio"}
                          <ArrowRight className="size-5" />
                        </Link>
                      </CardContent>
                    ) : null}
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 top-[12rem] border-white/70 bg-white text-secondary-900 shadow-md hover:bg-white" />
        <CarouselNext className="right-4 top-[12rem] border-white/70 bg-white text-secondary-900 shadow-md hover:bg-white" />
      </Carousel>

      <div className="mt-6 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to ${slide.title}`}
            className={cn(
              "h-2.5 rounded-full transition-all",
              current === index ? "w-8 bg-primary-500" : "w-2.5 bg-primary-200"
            )}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
