import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export const metadata: Metadata = {
  title: "DumbTools",
  description: "Dumb tools with dumb features",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {/* Providers later :p */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
