import { ReactNode } from "react";
import "katex/dist/katex.min.css";
import "../styles/globals.css";

// export const metadata = {
//   title: `CFA Notes`,
//   description: `Learn more about the CFA Exam`,
// };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your App Title</title>
        <meta name="description" content="Description of your app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body className="text-red-400">{children}</body>
    </html>
  );
}

// export { metadata }; // Export metadata for dynamic handling
