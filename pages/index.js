import Head from "next/head";
import Main from "./main";
import PageHead from "./PageHead";

export default function Home() {
  const pageTitle = "Neocon Technologies Limited";
  return (
    <>
      <PageHead title={pageTitle} />
      <Main />
    </>
  );
}
