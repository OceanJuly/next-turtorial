import { Inter } from "next/font/google";
import "./globals.css";

// components
import NavBar from '@/components/navBar/NavBar'
import Footer from '@/components/footer/Footer'
import {ReactNode} from "react";
import {ThemeProvider} from "@/components/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
            <div className="max-w-[1366px] min-h-[100vh] my-0 mx-auto py-0 px-[60px] flex flex-col justify-between">
                <NavBar />
                {children}
                <Footer />
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
