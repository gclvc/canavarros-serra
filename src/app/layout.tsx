import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Canavarros Serra | Cirurgia Plástica Premium em Mato Grosso",
  description: "Clínica de cirurgia plástica guiada pelo Dr. Márcio Canavarros (CRM MT 6323). Especialistas em R24R, Facelift Deep Plane e Cosmiatria em Cuiabá e Sorriso.",
  keywords: ["Cirurgia Plástica", "Mato Grosso", "Cuiabá", "Sorriso", "Dr. Márcio Canavarros", "Prótese de Mama R24R", "Facelift Deep Plane", "Morpheus"],
  authors: [{ name: "Dr. Márcio Canavarros" }],
  openGraph: {
    title: "Canavarros Serra Cirurgia Plástica",
    description: "Tradição familiar, expertise e segurança focada em resultados naturais e harmoniosos.",
    url: "https://canavarrosserra.com.br", // replace with real domain later
    siteName: "Canavarros Serra",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
