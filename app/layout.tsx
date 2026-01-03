import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Escola Amadeu Souza",
  description: "Ensinando a criança o caminho em que deve andar. Do 1º ao 5º ano do ensino fundamental.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${outfit.variable} font-sans antialiased text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
