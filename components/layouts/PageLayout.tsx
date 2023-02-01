import Head from "next/head";
import Navigation from "./Navigation";

interface Props {
  children: JSX.Element[];
}
function PageLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Brayan Forero</title>
      </Head>
      <Navigation />
      <body>{children}</body>
    </>
  );
}

export default PageLayout;
