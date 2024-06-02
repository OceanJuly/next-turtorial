import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// components
import NavBar from '@/components/navBar/NavBar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[inter.className, 'container']}>
          <NavBar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
