import Link from "next/link";
import { Mail } from "lucide-react";
import { siFacebook, siInstagram, siWhatsapp } from "simple-icons";

const policyLinks = [
  { label: "Cómo llegar", href: "https://maps.app.goo.gl/i3J1ZfTPsawVK1J99" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/coccarde2022/", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/casadeoracion.caminocieloceiba/", icon: "facebook" },
  { label: "WhatsApp", href: "https://whatsapp.com/channel/0029VabzRnFKGGGIjeGMaJ2D", icon: "whatsapp" },
  // { label: "Email", href: "mailto:info@coccarde2022@gmail.com", icon: "email" },
];

export const Footer = () => {
  const renderSocialIcon = (icon: string) => {
    if (icon === "instagram") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[17px] fill-current">
          <path d={siInstagram.path} />
        </svg>
      );
    }

    if (icon === "facebook") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[17px] fill-current">
          <path d={siFacebook.path} />
        </svg>
      );
    }
    if (icon === "whatsapp") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[17px] fill-current">
          <path d={siWhatsapp.path} />
        </svg>
      );
    }
    

    return <Mail size={17} aria-hidden="true" />;
  };

  return (
    <footer className="w-full bg-[#0f1117] px-4 py-5 sm:px-6">
      <div className="mx-auto w-full max-w-7xl rounded-xl px-5 py-8 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <h3 className="text-2xl font-medium text-secondary-500">Casa de Oración Camino Al Cielo</h3>
            <p className="text-xs uppercase tracking-[0.18em] text-white/55">
              © 2026 Casa de Oración Camino Al Cielo. <br/>Todos los derechos reservados.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between md:gap-10">
            <nav aria-label="Footer links">
              <ul className="flex flex-col gap-3 text-xs uppercase tracking-[0.2em] text-white/75 sm:flex-row sm:gap-8">
                {policyLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4 text-white/80">
              {socialLinks.map((item) => {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="rounded-md p-1 transition hover:text-white"
                  >
                    {renderSocialIcon(item.icon)}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
