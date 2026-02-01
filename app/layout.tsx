import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lunchbox League — Mission-ready allergy safety",
  description:
    "Turn allergy safety into a kid-powered mission: passports, pack checks, and an emergency plan you can share in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${bebas.variable}`}>
      <body className="min-h-dvh antialiased lb-grain">
        {children}
      </body>
    </html>
  );
}
