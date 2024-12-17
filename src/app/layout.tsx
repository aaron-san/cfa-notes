import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

// import "highlight.js/styles/stackoverflow-light.css";
// import "highlight.js/styles/foundation.css";
import "highlight.js/styles/stackoverflow-light.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CFA Notes",
  description: "Notes for the CFA tests",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
          integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-slate-600 to-slate-100`}
      >
        <Header />
        <main className="container mx-auto bg-slate-100 md:px-8 px-4 lg:lg:px-20 pt-10 pb-4 min-h-[calc(100vh-3rem)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
