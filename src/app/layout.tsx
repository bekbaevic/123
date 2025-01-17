import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/shared";
import 'boxicons/css/boxicons.min.css';
export const metadata: Metadata = {
  title: "Rashid Seytmuratov",
  description: "xxaxaxaxaxaxaxaxaxaxaaxaxaxa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
