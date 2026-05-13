import type { Metadata } from "next";
import "./globals.css";

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
        {/* Providers later :p */}
        {children}
      </body>
    </html>
  );
}
