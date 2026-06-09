import ministerioJovenes1 from "@/lib/images/ministerio-jovenes/ministerio-jovenes.jpg";
import ministerioJovenes2 from "@/lib/images/ministerio-jovenes/ministerio-jovenes-2.jpg";
import ministerioJovenes3 from "@/lib/images/ministerio-jovenes/ministerio-jovenes-3.jpg";
import ministerioNinos1 from "@/lib/images/ministerio-ninos/ministerio-ninos-1.jpeg";
import ministerioNinos2 from "@/lib/images/ministerio-ninos/ministerio-ninos-2.jpeg";
import ministerioNinos3 from "@/lib/images/ministerio-ninos/ministerio-ninos-3.jpeg";
import institutoKalEl from "@/lib/images/instituto-kal-el/instituto-kal-el-1.jpg";
import institutoKalEl2 from "@/lib/images/instituto-kal-el/instituto-kal-el-2.jpg";
import institutoKalEl3 from "@/lib/images/instituto-kal-el/instituto-kal-el-3.jpg";


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
      "Instituto Kal-el es un espacio de formación y desarrollo espiritual para jóvenes y adultos que buscan crecer en su fe y servicio a Dios.",
    imageSrc: "/images/institute-kal-el.jpg",
    imageAlt: "Instituto Kal-el",
    href: "#institute",
    imageSlides: [
      { src: institutoKalEl, alt: "Instituto Kal-el slide 1" },
      { src: institutoKalEl2, alt: "Instituto Kal-el slide 2" },
      { src: institutoKalEl3, alt: "Instituto Kal-el slide 3" },
    ],
  },
];
