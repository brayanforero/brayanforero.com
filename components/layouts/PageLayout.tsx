import Head from "next/head";

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}
function PageLayout({ children, title = "Brayan Forero" }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* TODO: NAVIGATION */}
      <main>{children}</main>
    </>
  );
}

export default PageLayout;
