import * as S from "./styles";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiLinkedin,
  FiChevronUp,
} from "react-icons/fi";

import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <S.Container>
      <S.Content>
        <S.Brand>
          <img src={logo} alt="CarZone" />

          <p>
            Encontre o carro perfeito para você. Os melhores preços e condições
            do mercado.
          </p>
        </S.Brand>

        <S.Column>
          <h3>INSTITUCIONAL</h3>

          <a href="#">Sobre nós</a>

          <a href="#">Trabalhe conosco</a>

          <a href="#">Política de privacidade</a>

          <a href="#">Termos de uso</a>
        </S.Column>

        <S.Column>
          <h3>AJUDA</h3>

          <a href="#">Central de ajuda</a>

          <a href="#">Como comprar</a>

          <a href="#">Formas de pagamento</a>

          <a href="#">Garantia</a>
        </S.Column>

        <S.Column>
          <h3>SERVIÇOS</h3>

          <a href="#">Financiamento</a>

          <a href="#">Seguro auto</a>

          <a href="#">Avaliação de usados</a>

          <a href="#">Consórcio</a>
        </S.Column>

        <S.Column>
          <h3>FALE CONOSCO</h3>

          <S.ContactItem>
            <FiPhone />

            <span>(11) 99999-9999</span>
          </S.ContactItem>

          <S.ContactItem>
            <FiMail />

            <span>contato@carzone.com.br</span>
          </S.ContactItem>

          <S.ContactItem>
            <FiMapPin />

            <span>São Paulo, SP</span>
          </S.ContactItem>

          <S.Socials>
            <button type="button">
              <FiInstagram />
            </button>

            <button type="button">
              <FiFacebook />
            </button>

            <button type="button">
              <FiYoutube />
            </button>

            <button type="button">
              <FiLinkedin />
            </button>
          </S.Socials>
        </S.Column>
      </S.Content>

      <S.Bottom>
        <span>© 2026 CarZone. Todos os direitos reservados.</span>

        <S.ScrollTop>
          <FiChevronUp />
        </S.ScrollTop>
      </S.Bottom>
    </S.Container>
  );
}

export default Footer;
