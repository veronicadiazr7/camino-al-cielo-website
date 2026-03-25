import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type CardSectionItem = {
  eyebrow?: string;
  title?: string;
  description?: string;
  content?: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  imagePosition?: "left" | "right";
  ctaLabel?: string;
  ctaHref?: string;
  imageFit?: "contain" | "cover" | "fill";
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  contentColor?: string;

};

type CardSectionProps = {
  items?: CardSectionItem[];
};

const defaultItems: CardSectionItem[] = [
  {
    eyebrow: "Ultimo Mensaje",
    title: "Nuestros Servicios",
    description: "Horarios de reuniones y actividades para toda la familia.",
    content: "Domingo 10:00 AM | Miercoles 7:00 PM",
    imageSrc: "/images/hero-placeholder-1.svg",
    imageAlt: "Servicio principal",
    imagePosition: "left",
    ctaLabel: "Ver mas",
    ctaHref: "/eventos",
    imageFit: "cover",
    backgroundColor: "bg-[#17191f]"
  },
  {
    eyebrow: "Comunidad",
    title: "Conectate con Nosotros",
    description: "Conoce nuestros ministerios y como puedes participar.",
    content: "Encuentra un espacio para crecer, servir y compartir en comunidad.",
    imageSrc: "/images/hero-placeholder-2.svg",
    imageAlt: "Comunidad de la iglesia",
    imagePosition: "right",
    ctaLabel: "Conocer ministerios",
    ctaHref: "/ministerios",
    imageFit: "cover",
    backgroundColor: "bg-[#17191f]"
  },
];

export const CardSection = ({ items = defaultItems }: CardSectionProps) => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1">
        {items.map((item) => (
          <Card
            key={item.title}
            variant="noBorder"
            className={cn(
              "overflow-hidden rounded-none border-0 py-12",
              item.backgroundColor ?? "bg-[#17191f]"
            )}
          >
            <div
              className={`grid grid-cols-1 md:grid-cols-2 ${
                item.imagePosition === "right" ? "[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative min-h-[220px] md:min-h-[320px]">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className={cn(
                    item.imageFit === "contain"
                      ? "object-contain"
                      : item.imageFit === "fill"
                      ? "object-fill"
                      : "object-cover"
                  )}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="flex h-full flex-col justify-center p-6 sm:p-8 md:p-10">
                <CardHeader className="px-0">
                  {item.eyebrow ? (
                    <p className="text-xs uppercase tracking-[0.2em] text-[#c9a85f]">
                      {item.eyebrow}
                    </p>
                  ) : null}
                  <CardTitle className={`text-2xl uppercase ${item.titleColor ?? "text-white"} sm:text-3xl`}>
                    {item.title}
                  </CardTitle>
                  <CardDescription className={`text-sm ${item.descriptionColor ?? "text-white/80"} sm:text-base`}>
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <p className={`text-sm ${item.contentColor ?? "text-white/80"}`}>{item.content}</p>
                  {item.ctaLabel ? (
                    <a
                      href={item.ctaHref ?? "#"}
                      className="mt-6 inline-block text-sm font-semibold uppercase tracking-wide text-[#c9a85f] hover:text-[#e3c98f]"
                    >
                      {item.ctaLabel} →
                    </a>
                  ) : null}
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
