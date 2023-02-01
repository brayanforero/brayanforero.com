import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Poppins } from "@next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}
