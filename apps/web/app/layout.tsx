import type { Metadata, Viewport } from "next";
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
  title: "Samuel Campos | Desenvolvedor Full Stack Júnior",
  description:
    "Samuel Campos, estudante de Engenharia de Software e Desenvolvedor Full Stack Júnior, em busca da primeira oportunidade profissional em desenvolvimento de software.",
  authors: [{ name: "Samuel Campos Carvalho" }],
  openGraph: {
    title: "Samuel Campos | Desenvolvedor Full Stack Júnior",
    description:
      "Conheça os projetos práticos de Samuel Campos, estudante de Engenharia de Software e Desenvolvedor Full Stack Júnior em busca da primeira oportunidade profissional na área.",
    siteName: "Samuel Campos — Portfólio",
    locale: "pt_BR",
    alternateLocale: "en_US",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#070909",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
