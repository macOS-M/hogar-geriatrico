import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hogar Geriátrico La Sabana",
  description: "Sitio informativo para Hogar Geriátrico La Sabana",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
