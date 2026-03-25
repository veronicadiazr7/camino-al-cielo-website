import { CardSection } from "./components/CardSection";
import { HeroSlideshow } from "./components/HeroSlideshow";
import logoMinisterios from "@/lib/images/collage-logo-ministerios.png";

export default function Home() {
  return (
   <>
      <HeroSlideshow />
      <CardSection
  items={[
    {
      eyebrow: "Misión",
      title: "Somos una Iglesia que A.R.D.E.",
      description: "Ama, Restaura, Discipula y Envia",
      imageSrc: "/images/hero-placeholder-2.svg",
      imageAlt: "Mensaje destacado",
      imagePosition: "right",
      ctaLabel: "Ver Más",
      ctaHref: "/quienes-somos",
    },
    {
      title: "Ministerios",
      description: "Cada miembro, un propósito en Cristo",
      content: "Encuentra tu lugar para servir",
      imageSrc: logoMinisterios,
      imageAlt: "Ministerios logo",
      imageFit: "contain",
      imagePosition: "left",
      ctaLabel: "Ver Más",
      ctaHref: "/ministerios",
      backgroundColor:"bg-white",
      titleColor: "text-[#c9a85f]",
      contentColor: "text-secondary-500",
      descriptionColor: "text-secondary-500",
    },
  ]}
/>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3787.464996780629!2d-65.65216699999999!3d18.326058800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0497004916823f%3A0x6bf37951da0ecec9!2sIglesia%20casa%20de%20oraci%C3%B3n%20camino%20al%20cielo!5e0!3m2!1sen!2spr!4v1774121559428!5m2!1sen!2spr"
  width="100%"
  height="400"
  loading="lazy">
</iframe>
  </>
  );
}
