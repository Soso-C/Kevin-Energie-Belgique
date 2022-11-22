import Head from "next/head";
import Image from "next/image";
import TopBarHeader from "../components/topbarheader/TopBarHeader";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Energie</title>
        <meta name="description" content="Kevin energie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBarHeader />
    </>
  );
}
