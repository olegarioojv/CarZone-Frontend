import * as S from "./styles";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FeaturedCars from "../../components/FeaturedCars";
import PopularBrands from "../../components/PopularBrands";
import Footer from "../../components/Footer";

export function Home() {
  return (
    <>
      <S.Container>
        <Sidebar />

        <S.Content>
          <Navbar />

          <S.Main>
            <Hero />

            <FeaturedCars />

            <PopularBrands />
          </S.Main>
        </S.Content>
      </S.Container>

      <Footer />
    </>
  );
}

export default Home;
