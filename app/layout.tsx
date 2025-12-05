import "katex/dist/katex.min.css";
import "@/styles/globals.css";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

// export const metadata = {
//   title: `CFA® Notes`,
//   description: `Learn more about the CFA® Exam`,
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your App Title</title>
        <meta name="description" content="Description of your app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body className="dark:bg-slate-800 min-h-screen dark:text-slate-100">
        <PageHeader />
        <div className="mx-auto px-2 sm:px-6 pt-20 max-w-3xl min-h-[calc(100vh-3rem)]">
          {children}
        </div>
        <PageFooter />
      </body>
    </html>
  );
}

// export { metadata }; // Export metadata for dynamic handling
