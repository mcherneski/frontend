import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Card } from '@/components/ui/card'
import { CardTop } from "@/components/custom/card-top";
import { CardBottom } from "@/components/custom/card-bottom";

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
          <Card className='relative w-3/5 h-3/4 backdrop-blur-md bg-transparent text-white flex flex-col'>
            <CardTop />
              {children}  
            <CardBottom />
          </Card>
        </div>
      </body>
    </html>
  );
}
