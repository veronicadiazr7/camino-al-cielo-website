import Image from "next/image";

import pastores from "@/lib/images/pastores/pastores-enrique-amneris.png";

export function PastoresSection() {
  return (
    <section
      aria-labelledby="pastores-heading"
      className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
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
          <p className="mt-5 text-base leading-8 text-secondary-600 sm:text-lg">
            Con amor por Dios y por las personas, nuestros pastores acompañan
            a esta familia de fe en su caminar con Cristo. Su corazón es ver
            vidas restauradas, familias fortalecidas y una comunidad que crece
            en Su Palabra.
          </p>

          <div className="mt-8 space-y-6 border-l-2 border-[#c9a85f] pl-6">
            <div>
              <h3 className="text-xl font-semibold text-secondary-900">
                Pastor Enrique Figueroa
              </h3>
              <p className="mt-2 text-sm leading-7 text-secondary-600">
                Comprometido con enseñar la Palabra de Dios y acompañar a cada
                persona a descubrir su propósito en Cristo.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary-900">
                Pastora Amneris Rodríguez
              </h3>
              <p className="mt-2 text-sm leading-7 text-secondary-600">
                Dedicada a servir con amor, fortalecer a las familias y crear
                espacios donde cada persona encuentre apoyo y esperanza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
