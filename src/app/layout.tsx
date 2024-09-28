import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import StarBG from "@/components/comps/starbg";
import { ClerkProvider } from "@clerk/nextjs";

const lato = Lato({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify the character subsets you need
});

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${lato.className}`}>
          <StarBG />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
