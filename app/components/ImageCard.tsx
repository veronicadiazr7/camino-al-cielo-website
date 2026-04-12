"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type ImageCardProps = {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  imageSlides?: Array<{
    src: string | StaticImageData;
    alt: string;
  }>;
  href?: string;
  ctaLabel?: string;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function ImageCard({
  title,
  description,
  imageSrc,
  imageAlt,
  imageSlides,
  href,
  ctaLabel = "Learn More",
  className,
  imageClassName,
  contentClassName,
  titleClassName,
  descriptionClassName,
}: ImageCardProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const slides = imageSlides?.length ? imageSlides : [{ src: imageSrc, alt: imageAlt }];
  const hasMultipleSlides = slides.length > 1;

  React.useEffect(() => {
    if (!api || !hasMultipleSlides) return;

    const updateCurrent = () => setCurrent(api.selectedScrollSnap());
    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api, hasMultipleSlides]);

  const media = hasMultipleSlides ? (
    <div className={cn("relative", imageClassName)}>
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent className="-ml-0">
          {slides.map((slide) => (
            <CarouselItem key={`${title}-${slide.alt}`} className="pl-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#d9d9dc]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
                  className="object-cover grayscale"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 top-1/2 border-white/70 bg-white/95 text-secondary-900 shadow-sm hover:bg-white" />
        <CarouselNext className="right-4 top-1/2 border-white/70 bg-white/95 text-secondary-900 shadow-sm hover:bg-white" />
      </Carousel>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={`${title}-dot-${slide.alt}`}
            type="button"
            aria-label={`Go to slide ${index + 1} for ${title}`}
            className={cn(
              "h-2.5 rounded-full transition-all",
              current === index ? "w-7 bg-primary-500" : "w-2.5 bg-primary-200"
            )}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  ) : (
    <div
      className={cn(
        "relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#d9d9dc]",
        imageClassName
      )}
    >
      <Image
        src={slides[0].src}
        alt={slides[0].alt}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
        className="object-cover grayscale"
      />
    </div>
  );

  const cardBody = (
    <>
      {media}

      <div className={cn("flex flex-1 flex-col", contentClassName)}>
        <CardHeader className="px-0 pt-0">
          <CardTitle
            className={cn(
              "text-3xl font-semibold tracking-[-0.03em] text-primary-700",
              titleClassName
            )}
          >
            {title}
          </CardTitle>
          <CardDescription
            className={cn(
              "max-w-[24ch] text-lg leading-8 text-secondary-700",
              descriptionClassName
            )}
          >
            {description}
          </CardDescription>
        </CardHeader>

        {href ? (
          <CardContent className="mt-auto px-0">
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-xl font-semibold text-primary-700 transition-transform duration-200 group-hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
            >
              {ctaLabel}
              <ArrowRight className="size-5" />
            </Link>
          </CardContent>
        ) : null}
      </div>
    </>
  );

  const rootClassName = cn(
    "group h-full rounded-[2rem] border-0 bg-[#f7f7f8] p-7 shadow-none sm:p-10",
    className
  );

  return (
    <Card variant="noBorder" className={rootClassName}>
      <div className="flex h-full flex-col gap-8">{cardBody}</div>
    </Card>
  );
}
