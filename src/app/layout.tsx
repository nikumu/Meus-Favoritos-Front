import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "Meus Favoritos",
  description: "A plataforma de entretenimento 'Meus Favoritos' é voltada para usuários apaixonados por animes, livros, séries, músicas e filmes. Aqui, sua criatividade e paixão fluem naturalmente, basta ser você mesmo.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
