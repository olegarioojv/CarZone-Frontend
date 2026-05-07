import * as S from "./styles";

import carImage from "../../assets/hero-car.png.webp";

export function Hero() {
  return (
    <S.Container>
      <S.Content>
        <span>ENCONTRE O CARRO</span>

        <h1>PERFEITO PARA VOCÊ</h1>

        <p>Milhares de opções com os melhores preços e condições do mercado.</p>

        <S.Actions>
          <button className="primary">VER CARROS</button>

          <button className="secondary">VENDER MEU CARRO</button>
        </S.Actions>
      </S.Content>

      <S.Image>
        <img src={carImage} alt="BMW" />
      </S.Image>
    </S.Container>
  );
}

export default Hero;
