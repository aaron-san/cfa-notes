import "katex/dist/katex.min.css";
import "@/styles/globals.css";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

// export const metadata = {
//   title: `CFA Notes`,
//   description: `Learn more about the CFA Exam`,
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your App Title</title>
        <meta name="description" content="Description of your app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body className="text-blue-700">
        <PageHeader />
        {children}
        <PageFooter />
      </body>
    </html>
  );
}

// export { metadata }; // Export metadata for dynamic handling
