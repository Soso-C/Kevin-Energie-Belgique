import Navbar from "../../components/header/navbar/Navbar";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Banner from "/components/header/banner/Banner";
import MainPageService from "/components/main/mainPageService/MainPageService";
import ImageAndContentCustom from "/components/main/mainPageService/mainServiceContent/ImageAndContentCustom";
import Footer from "../../components/footer/Footer";
import imgBanner from "/public/pellet.jpg";
import imgMain from "/public/pellet2.png";
export default function Home() {
  return (
    <div className="bg-gray-50">
      <header>
        <TopBarHeader />
        <Navbar />
        <Banner imgBanner={imgBanner} title={"Test Page"} />
      </header>
      <main>
        <MainPageService title={"Test Page"}>
          <ImageAndContentCustom title={"Test Page"} imgContent={imgMain}>
            <p>Test Helo</p>
            <p>Test Helo</p>
            <p>Test Helo</p>
            <p>Test Helo</p>
            <p>Test Helo</p>
            <p>Test Helo</p>
            <p>Test Helo</p>
            <p>Test Helo</p>
          </ImageAndContentCustom>
        </MainPageService>
      </main>
      <Footer />
    </div>
  );
}
