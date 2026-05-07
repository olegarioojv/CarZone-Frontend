import * as S from "./styles";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";

export function Home() {
  return (
    <S.Container>
      <Sidebar />

      <S.Content>
        <Navbar />

        <S.Main>
          <Hero />
        </S.Main>
      </S.Content>
    </S.Container>
  );
}

export default Home;
