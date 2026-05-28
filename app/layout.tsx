import type { Metadata } from "next";
import { Footer } from "./components/layout/Footer";
import { NavBar } from "./components/layout/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa de Oración Camino al Cielo",
  description: "Somos una iglesia que A.R.D.E.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen w-full flex-col">
          <header className="w-full border-b">
            <NavBar />
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
