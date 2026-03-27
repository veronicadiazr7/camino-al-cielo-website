import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

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
  href,
  ctaLabel = "Learn More",
  className,
  imageClassName,
  contentClassName,
  titleClassName,
  descriptionClassName,
}: ImageCardProps) {
  const cardBody = (
    <>
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#d9d9dc]",
          imageClassName
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover grayscale"
        />
      </div>

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
            <span className="inline-flex items-center gap-2 text-xl font-semibold text-primary-700 transition-transform duration-200 group-hover:translate-x-1">
              {ctaLabel}
              <ArrowRight className="size-5" />
            </span>
          </CardContent>
        ) : null}
      </div>
    </>
  );

  const rootClassName = cn(
    "group h-full rounded-[2rem] border-0 bg-[#f7f7f8] p-7 shadow-none sm:p-10",
    className
  );

  if (href) {
    return (
      <Card variant="noBorder" className={rootClassName}>
        <Link
          href={href}
          className="flex h-full flex-col gap-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
        >
          {cardBody}
        </Link>
      </Card>
    );
  }

  return (
    <Card variant="noBorder" className={rootClassName}>
      <div className="flex h-full flex-col gap-8">{cardBody}</div>
    </Card>
  );
}
