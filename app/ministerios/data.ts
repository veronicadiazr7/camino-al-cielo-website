
import ministerioJovenes from "@/lib/images/ministerio-jovenes/ministerio-jovenes.jpg";
import ministerioJovenes1 from "@/lib/images/ministerio-jovenes/ministerio-jovenes.jpg";
import ministerioJovenes2 from "@/lib/images/ministerio-jovenes/ministerio-jovenes-2.jpg";
import ministerioJovenes3 from "@/lib/images/ministerio-jovenes/ministerio-jovenes-3.jpg";
import ministerioJovenes4 from "@/lib/images/ministerio-jovenes/ministerio-jovenes-4.png";
import ministerioJovenes5 from "@/lib/images/ministerio-jovenes/ministerio-jovenes-5.jpeg";
import ministerioJovenes6 from "@/lib/images/ministerio-jovenes/ministerio-jovenes-6.png";
import ministerioNinos1 from "@/lib/images/ministerio-ninos/ministerio-ninos-1.jpeg";
import ministerioNinos2 from "@/lib/images/ministerio-ninos/ministerio-ninos-2.jpeg";
import ministerioNinos3 from "@/lib/images/ministerio-ninos/ministerio-ninos-3.jpeg";
import ministerioNinos4 from "@/lib/images/ministerio-ninos/ministerio-ninos-4.jpg";
import ministerioNinos5 from "@/lib/images/ministerio-ninos/ministerio-ninos-5.jpeg";
import institutoKalEl from "@/lib/images/instituto-kal-el/instituto-kal-el-1.jpeg";
import institutoKalEl2 from "@/lib/images/instituto-kal-el/instituto-kal-el-2.jpeg";
import institutoKalEl3 from "@/lib/images/instituto-kal-el/instituto-kal-el-3.jpeg";
import institutoKalElLogo from "@/lib/images/instituto-kal-el/instituto-kal-el-logo.png";
import ministerioHombres from "@/lib/images/ministerio-hombres/ministerio-hombres.png";
import ministerioHombres1 from "@/lib/images/ministerio-hombres/ministerio-hombres-1.png";
import ministerioHombres2 from "@/lib/images/ministerio-hombres/ministerio-hombres-2.png";
import ministerioHombres3 from "@/lib/images/ministerio-hombres/ministerio-hombres-3.png";
import ministerioMujeres from "@/lib/images/ministerio-mujeres/ministerio-mujeres.jpeg";
import ministerioMujeres1 from "@/lib/images/ministerio-mujeres/ministerio-mujeres-1.jpeg";
import ministerioAdultosMayores from "@/lib/images/ministerio-kit-dorado/ministerio-kit.jpg";
import ministerioAdultosMayores1 from "@/lib/images/ministerio-kit-dorado/ministerio-kit-1.jpg";
import ministerioAdultosMayores2 from "@/lib/images/ministerio-kit-dorado/ministerio-kit-2.jpg";

export const ministries = [
  {
    id: "niños",
    title: "Semillas que Arden",
    eyebrow:"Ministerio de Niños",
    description:
      "Un ministerio enfocado en sembrar la Palabra de Dios en el corazón de los niños, formando una generación desde temprana edad que ama, conoce y vive para Cristo.      Niños que crecen con identidad, fe y propósito, encendidos por el amor de Dios y preparados para impactar el futuro.",
    imageSrc: ministerioNinos1,
    imageAlt: "Ministerio de Niños",
    imageSlides: [
      { src: ministerioNinos1, alt: "Ministerio de Ninos slide 1" },
      { src: ministerioNinos2, alt: "Ministerio de Ninos slide 2" },
      { src: ministerioNinos3, alt: "Ministerio de Ninos slide 3" },
      { src: ministerioNinos4, alt: "Ministerio de Ninos slide 4" },
      { src: ministerioNinos5, alt: "Ministerio de Ninos slide 5" },
    ],
  },
  {
    id: "youth",
    title: "Generación Que ARDE",
    eyebrow: "Ministerio de Jóvenes",
    description:"Jóvenes apasionados por Dios, que no se conforman con lo superficial, sino que viven encendidos por Su presencia.Una generación que ama, busca y representa a Cristo con valentía, creciendo en identidad, fe y propósito para impactar su entorno y generación.",
    imageSrc: ministerioJovenes1,
    imageAlt: "Youth ministry",
    href: "https://www.instagram.com/generacionarde/",
    imageSlides: [
      { src: ministerioJovenes1, alt: "Generacion Que ARDE slide 1" },
      { src: ministerioJovenes2, alt: "Generacion Que ARDE slide 2" },
      { src: ministerioJovenes3, alt: "Generacion Que ARDE slide 3" },
      { src: ministerioJovenes4, alt: "Generacion Que ARDE slide 4" },
      { src: ministerioJovenes5, alt: "Generacion Que ARDE slide 5" },
      { src: ministerioJovenes6, alt: "Generacion Que ARDE slide 6" },
      { src: ministerioJovenes, alt: "Generacion Que ARDE slide 7" },
    ],
  },
  {
    id: "hombres",
    eyebrow: "Ministerio de Hombres",
    title: "Los Resilientes",
    description: "Un ministerio de hombres comprometidos a vivir con integridad, responsabilidad y temor de Dios. Hombres que buscan ser conformes al corazón de Dios, preparándose continuamente en carácter, fe y obediencia. Se levantan como líderes espirituales en su hogar, iglesia y comunidad, fortaleciendo su identidad y guiando con ejemplo en cada área de su vida.",
    imageSrc: ministerioHombres,
    imageAlt: "Ministerio de Hombres",
    imageSlides: [
      { src: ministerioHombres1, alt: "Ministerio de Hombres slide 1" },
      { src: ministerioHombres2, alt: "Ministerio de Hombres slide 2" },
      { src: ministerioHombres3, alt: "Ministerio de Hombres slide 3" },
    ],
  },
  {
    id: "mujeres",
    eyebrow: "Ministerio de Damas",
    title: "Las Que No Retroceden",
    description: "Un ministerio de mujeres firmes, valientes y determinadas a avanzar en el propósito de Dios. Mujeres que, a pesar de los procesos, deciden no rendirse, no retroceder y seguir creciendo en fe, identidad y carácter, siendo ejemplo en su hogar, iglesia y comunidad.",
    imageSrc: ministerioMujeres,
    imageAlt: "Ministerio de Mujeres",
    imageSlides: [
      { src: ministerioMujeres1, alt: "Ministerio de Mujeres slide 1" },
      { src: ministerioMujeres, alt: "Ministerio de Mujeres slide 2" },
    ],
  },
  {
    id: "instituto",
    eyebrow: "Instituto Bíblico",
    title: "Instituto Kal-EL",
    description:
      "El Instituto Bíblico Kal-el es un espacio dedicado a la enseñanza de la Palabra de Dios, la formación bíblica y el crecimiento espiritual, preparando a cada estudiante para fortalecer su fe y servir a Dios con conocimiento y propósito. Formando líderes. Edificando vidas. Transformando generaciónes.",
    imageSrc: institutoKalElLogo,
    imageAlt: "Instituto Kal-el",
    imageSlides: [
      { 
        src: institutoKalElLogo, 
        alt: "Instituto Kal-el slide logo 1" 
      },
      { 
        src: institutoKalEl, 
        alt: "Instituto Kal-el slide 2" 
      },
      { src: institutoKalEl2, alt: "Instituto Kal-el slide 3" },
      { src: institutoKalEl3, alt: "Instituto Kal-el slide 4" },
    ],
  },
  {
    id: "adultos-mayores",
    eyebrow: "Ministerio de Adultos Mayores",
    title: "El Kit Dorado – Los 4x4",
    description: "Un ministerio de experiencia, sabiduría y legado. Hombres y mujeres que han caminado con Dios a través de los años y continúan firmes, siendo pilares espirituales, consejeros y ejemplo de fe para las nuevas generaciones.",    imageSrc: ministerioAdultosMayores,
    imageAlt: "El Kit Dorado – Los 4x4",
    imageSlides: [
      { src: ministerioAdultosMayores, alt: "Kit Dorado 4x4 slide 1" },
      { src: ministerioAdultosMayores1, alt: "Kit Dorado 4x4 slide 2" },
      { src: ministerioAdultosMayores2, alt: "Kit Dorado 4x4 slide 3" },
    ],
  },
];
