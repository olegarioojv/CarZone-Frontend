import * as S from "./styles";
import {
  FiShield,
  FiDollarSign,
  FiUserCheck,
  FiHeadphones,
} from "react-icons/fi";

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

        <S.Features>
          <S.FeatureCard>
            <div className="icon">
              <FiShield />
            </div>

            <div>
              <strong>Compra 100% Segura</strong>

              <span>Seus dados protegidos</span>
            </div>
          </S.FeatureCard>

          <S.FeatureCard>
            <div className="icon">
              <FiDollarSign />
            </div>

            <div>
              <strong>Melhores Preços</strong>

              <span>Compare e economize</span>
            </div>
          </S.FeatureCard>

          <S.FeatureCard>
            <div className="icon">
              <FiUserCheck />
            </div>

            <div>
              <strong>Vendedores Verificados</strong>

              <span>Mais segurança pra você</span>
            </div>
          </S.FeatureCard>

          <S.FeatureCard>
            <div className="icon">
              <FiHeadphones />
            </div>

            <div>
              <strong>Suporte Especializado</strong>

              <span>Atendimento dedicado</span>
            </div>
          </S.FeatureCard>
        </S.Features>
      </S.Content>
      <S.Image>
        <img src={carImage} alt="BMW" />
      </S.Image>
    </S.Container>
  );
}

export default Hero;
