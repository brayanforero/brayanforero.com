import type { AppProps } from "next/app";
import { PageLayout } from "@/components/layouts";
import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <NextNProgress />
      <Component {...pageProps} />
    </PageLayout>
  );
}
