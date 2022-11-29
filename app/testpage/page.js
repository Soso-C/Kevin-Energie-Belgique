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
        <Banner imgBanner={imgBanner} title={"Test Banner"} />
      </header>
      <main>
        <MainPageService title={"Test main title"}>
          <ImageAndContentCustom title={"Testimg alt"} imgContent={imgMain}>
            <h1>Test Test</h1>
            <p>
              Lorem ipsum dolor sit amet <strong>Test</strong>, adipisicing
              elit. Maiores culpa tenetur praesentium recusandae reiciendis
              voluptatibus unde libero, est perspiciatis accusamus vero harum
              quia modi voluptates impedit, tempore exercitationem deserunt
              numquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet <strong>Test</strong>, adipisicing
              elit. Maiores culpa tenetur praesentium recusandae reiciendis
              voluptatibus unde libero, est perspiciatis accusamus vero harum
              quia modi voluptates impedit, tempore exercitationem deserunt
              numquam.
            </p>
          </ImageAndContentCustom>
        </MainPageService>
      </main>
      <Footer />
    </div>
  );
}
