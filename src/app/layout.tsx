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

import Script from "next/script";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

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
      <head>
        <Script id="ga-script" strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=[COLE_SEU_GA_AQUI]`} />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '[COLE_SEU_GA_AQUI]');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '[COLE_SEU_PIXEL_AQUI]');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="min-h-[100dvh] flex flex-col font-sans">
        <Header />
        <main className="flex-grow flex flex-col items-stretch">
          {children}
        </main>
        <Footer />
        <svg
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-color-burn"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </body>
    </html>
  );
}
