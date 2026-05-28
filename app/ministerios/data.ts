import ministerioJovenes1 from "@/lib/images/ministerio-jovenes/ministerio-jovenes.jpg";
import ministerioJovenes2 from "@/lib/images/ministerio-jovenes/ministerio-jovenes-2.jpg";
import ministerioJovenes3 from "@/lib/images/ministerio-jovenes/ministerio-jovenes-3.jpg";
import ministerioNinos1 from "@/lib/images/ministerio-ninos/ministerio-ninos-1.jpeg";
import ministerioNinos2 from "@/lib/images/ministerio-ninos/ministerio-ninos-2.jpeg";
import ministerioNinos3 from "@/lib/images/ministerio-ninos/ministerio-ninos-3.jpeg";


export const ministries = [
  {
    id: "niños",
    title: "Semillas que Arden",
    eyebrow:"Ministerio de Niños",
    description:
      "Un ministerio enfocado en sembrar la Palabra de Dios en el corazón de los niños, formando una generación desde temprana edad que ama, conoce y vive para Cristo.      Niños que crecen con identidad, fe y propósito, encendidos por el amor de Dios y preparados para impactar el futuro.",
    imageSrc: ministerioNinos1,
    imageAlt: "Ministerio de Niños",
    // href: "#children",
    imageSlides: [
      { src: ministerioNinos1, alt: "Ministerio de Ninos slide 1" },
      { src: ministerioNinos2, alt: "Ministerio de Ninos slide 2" },
      { src: ministerioNinos3, alt: "Ministerio de Ninos slide 3" },
    ],
  },
  {
    id: "youth",
    title: "Generación Que ARDE",
    eyebrow: "Ministerio de Jóvenes",
    description:"Jóvenes apasionados por Dios, que no se conforman con lo superficial, sino que viven encendidos por Su presencia.Una generación que ama, busca y representa a Cristo con valentía, creciendo en identidad, fe y propósito para impactar su entorno y generación.",
    imageSrc: ministerioJovenes1,
    imageAlt: "Youth ministry",
    href: "#youth",
    imageSlides: [
      { src: ministerioJovenes1, alt: "Generacion Que ARDE slide 1" },
      { src: ministerioJovenes2, alt: "Generacion Que ARDE slide 2" },
      { src: ministerioJovenes3, alt: "Generacion Que ARDE slide 3" },
    ],
  },
  {
    id: "instituto",
    title: "Instituto Kal-EL",
    description:
      "A ministry for musicians, vocalists, and creatives who want to lead the church in heartfelt worship.",
    imageSrc: "/images/CultoAltisimoTV.png",
    imageAlt: "Worship ministry",
    href: "#worship",
    imageSlides: [
      { src: "/images/CultoAltisimoTV.png", alt: "Adoracion slide 1" },
      { src: "/images/hero-placeholder-2.svg", alt: "Adoracion slide 2" },
      { src: "/images/hero-placeholder-1.svg", alt: "Adoracion slide 3" },
    ],
  },
];
