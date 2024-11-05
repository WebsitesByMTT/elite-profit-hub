import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cardo } from "next/font/google";
import { Toaster } from "react-hot-toast";

const cardo = Cardo({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elite Profit Hub",
  description: "investment website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cardo.className} bg-[#010101] antialiased`}>
        <div className="home relative flex flex-col">
          <Header />
        </div>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
