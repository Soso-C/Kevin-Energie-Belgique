import Navbar from "../components/header/navbar/Navbar";
import TopBarHeader from "../components/header/topbarheader/TopBarHeader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopBarHeader />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
