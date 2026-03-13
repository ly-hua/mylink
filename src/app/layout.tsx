import type { Metadata } from "next";
import { Inter, Outfit, Kantumruy_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const kantumruy = Kantumruy_Pro({
  weight: ["400", "700"],
  subsets: ["khmer"],
  variable: "--font-khmer",
});

export const metadata: Metadata = {
  title: "ម៉ាយលេខា POS | MyLekha LinkTree",
  description: "ប្រព័ន្ធតែមួយ សមស្របសម្រាប់គ្រប់អាជីវកម្ម",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${kantumruy.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
