import Image from "next/image";

import pastores from "@/lib/images/pastores/pastores-enrique-amneris.png";

export function PastoresSection({ resumen = false }: { resumen?: boolean }) {
  return (
    <section
      aria-labelledby="pastores-heading"
      className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2 lg:gap-16">
        <figure className="overflow-hidden rounded-2xl border border-[#d8cda9] bg-[#f3f1ec]">
          <Image
            src={pastores}
            alt="Pastores Enrique Figueroa y Amneris Rodríguez"
            width={640}
            height={720}
            sizes="(max-width: 767px) 100vw, 50vw"
            className="aspect-[4/5] w-full object-cover sm:aspect-[8/9]"
          />
          <figcaption className="border-t border-[#d8cda9] px-5 py-3 text-center text-sm text-secondary-600">
            Enrique Figueroa y Amneris Rodríguez
          </figcaption>
        </figure>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6f28]">
            Un corazón para servir
          </p>
          <h2
            id="pastores-heading"
            className="mt-4 text-3xl font-semibold leading-tight text-secondary-900 sm:text-4xl"
          >
            Conoce a nuestros pastores
          </h2>
          <div className="mt-5 space-y-5 text-base leading-8 text-secondary-600 sm:text-lg">
            {resumen ? (
              <>
                <p>
                  Los pastores Enrique Figueroa y Amneris Rodríguez lideran con humildad, amor y un corazón dispuesto a servir. Su deseo es cultivar una familia de fe donde cada persona se sienta bienvenida, amada y acompañada en su caminar con Dios.
                </p>
                <p>
                  Guiados por la visión ARDE —Ama, Restaura, Discípula y Envía—, nos impulsan a crecer en nuestra relación con Dios, fortalecer nuestra identidad en Cristo, desarrollar nuestros dones y descubrir el propósito que Él tiene para nuestras vidas.
                </p>
                <p>
                  Con un liderazgo cercano y comprometido, nos animan a vivir nuestra fe, servir a los demás y dar pasos firmes para cumplir el llamado de Dios.
                </p>
              </>
            ) : (
              <>
                <p>
                  Los pastores Enrique Figueroa y Amneris Rodriguez sirven con humildad, amor y entrega, reflejando el corazón de nuestra casa: un lugar donde cada persona es bienvenida y valorada. Su cercanía y accesibilidad nos permiten encontrar en ellos apoyo y acompañamiento en nuestro caminar con Dios.
                </p>
                <p>
                  Su corazón pastoral está enfocado en compartir el amor de Cristo y cultivar una familia de fe que crezca unida. A través del servicio y el cuidado de los demás, nos acompañan a fortalecer nuestra relación con Dios, descubrir nuestra identidad en Él y reconocer el propósito que tiene para nuestras vidas.
                </p>
                <p>
                  Guiados por la visión de nuestra casa, ARDE —Ama, Restaura, Discipula y Envía, nos enseñan a reflejar el amor de Dios en cada persona y familia; nos acompañan hacia la sanidad y la esperanza; nos forman en la Palabra para crecer como creyentes firmes, maduros e íntegros; y nos equipan para responder al llamado ministerial que el Señor nos ha encomendado.
                </p>
                <p>
                  Con un liderazgo cercano y un corazón dispuesto a servir, nuestros pastores nos animan a vivir la fe cada día: en el hogar, en nuestras relaciones y en la comunidad. Su deseo es que quienes lleguen a nuestra casa encuentren una familia con la cual crecer, un lugar donde puedan servir y una comunidad que les acompañe a seguir a Jesús.
                </p>
                <p>
                  Con pasión y firmeza, nos impulsan a dar pasos de fe, desarrollar los dones que Dios nos ha dado y vencer los temores que nos detienen. Nos exhortan a crecer y a perseverar, para que cada uno de nosotros pueda alcanzar el propósito que Dios tiene para su vida.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
