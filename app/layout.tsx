import "./globals.css";
import "./styles/hero.css";
import "./styles/welcome.css";
import "./styles/services.css";
import "./styles/sedes.css";
import "./styles/gallery.css";
import "./styles/activities.css";
import "./styles/training.css";
import "./styles/questions.css";
import "./styles/contact.css";
import "./styles/footer.css";
import type { Metadata } from "next";
import ScrollReveal from "./components/ScrollReveal";

export const metadata: Metadata = {
  title: "Hogar Geriátrico La Sabana",
  description: "Sitio informativo para Hogar Geriátrico La Sabana",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}<ScrollReveal /></body>
    </html>
  );
}
