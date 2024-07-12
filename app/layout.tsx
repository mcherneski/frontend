import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/custom/header"
import { Footer } from "@/components/custom/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyberd Consulting",
  description: "Web3, Serverless, Full Stack and Architecture consulting services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className='flex flex-col justify-center items-center h-screen w-screen bg-home-background'
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
          <div className='relative h-full w-full sm:w-3/4 sm:h-3/4 backdrop-blur-md bg-transparent text-white flex flex-col sm:border-white sm:border-[1px] sm:rounded-md'>
            <Header />
                {children}  
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
