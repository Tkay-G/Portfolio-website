import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Styx Portfolio",
  description: "A portfolio site made by Taku",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
