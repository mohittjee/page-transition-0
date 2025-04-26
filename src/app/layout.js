import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { ViewTransitions } from "next-view-transitions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Transitions",
  description: "using next-view-transitions",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <style>
            @import url('https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro');
          </style>
        </head>

        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Nav />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
