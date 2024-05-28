import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google"; //linee 1 and 2 import fonts and necessary modules from next js and google fonts
import "./globals.css"; // Imports css from globals.css under app

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: '--font-ibm-plex-serif',
  weight: ['400', '700'],
})
export const metadata: Metadata = {
  title: "Silwaks Banking",
  description: "Silwaks is a modern banking platform for everyone. Try us out!",
  keywords: "banking, finance, money, banking platform, banking app, banking software",
  icons: {
    icon: '/public/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
