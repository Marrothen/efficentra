import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Efficentra - Il centro del risparmio per la tua casa",
  description: "Efficentra offre soluzioni per il risparmio energetico: caldaie di ultima generazione, climatizzatori, impianti fotovoltaici, pompe di calore, serramenti isolanti e coibentazione. Risparmia sui consumi, investi sulla casa.",
  keywords: "efficentra, risparmio energetico, caldaie, climatizzatori, fotovoltaico, pompe di calore, serramenti, coibentazione, efficienza energetica, casa, consumi",
  authors: [{ name: "Efficentra" }],
  creator: "Efficentra",
  publisher: "Efficentra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://efficentra.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Efficentra - Il centro del risparmio per la tua casa",
    description: "Soluzioni per il risparmio energetico: caldaie, climatizzatori, fotovoltaico, pompe di calore, serramenti e coibentazione. Risparmia sui consumi, investi sulla casa.",
    url: 'https://efficentra.it',
    siteName: 'Efficentra',
    images: [
      {
        url: 'https://efficentra.it/logo.JPG',
        width: 742,
        height: 608,
        alt: 'Efficentra - Risparmia sui consumi, investi sulla casa',
        type: 'image/jpeg',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Efficentra - Il centro del risparmio per la tua casa",
    description: "Soluzioni per il risparmio energetico: caldaie, climatizzatori, fotovoltaico, pompe di calore, serramenti e coibentazione.",
    images: ['https://efficentra.it/logo.JPG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code', // Aggiungi quando disponibile
    // bing: 'your-bing-verification-code', // Aggiungi quando disponibile
  },
  category: 'home improvement',
  classification: 'Business',
  icons: {
    icon: [
      { url: "/IconCasa.JPG", sizes: "32x32", type: "image/jpeg" },
      { url: "/IconCasa.JPG", sizes: "16x16", type: "image/jpeg" }
    ],
    shortcut: "/IconCasa.JPG",
    apple: "/IconCasa.JPG",
    other: {
      rel: "icon",
      url: "/IconCasa.JPG",
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
