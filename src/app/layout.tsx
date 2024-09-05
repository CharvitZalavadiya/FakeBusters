import type { Metadata } from "next";
import "./globals.css";
import {Lato} from 'next/font/google'

const lato = Lato({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'] // Specify the character subsets you need
})

export const metadata: Metadata = {
  title: "Fake Busters",
  description: "Deepfake detection website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className}`}
      >
        {children}
      </body>
    </html>
  );
}
