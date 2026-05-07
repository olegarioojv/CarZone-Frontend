import * as S from "./styles";

import { FiSearch, FiHeart, FiBell, FiChevronDown } from "react-icons/fi";

import avatar from "../../assets/avatar.jpeg";

export function Navbar() {
  return (
    <S.Container>
      <S.Left>
        <S.Search>
          <input type="text" placeholder="Buscar por marca, modelo ou ano..." />

          <button>
            <FiSearch />
          </button>
        </S.Search>

        <S.Menu>
          <a className="active">INÍCIO</a>

          <a>CARROS</a>

          <a>VENDER</a>

          <a>FINANCIAMENTO</a>

          <a>SERVIÇOS</a>

          <a>CONTATO</a>
        </S.Menu>
      </S.Left>

      <S.Right>
        <S.IconButton>
          <FiHeart />

          <span>1</span>
        </S.IconButton>

        <S.IconButton>
          <FiBell />

          <span>2</span>
        </S.IconButton>

        <S.Profile>
          <img src={avatar} alt="Perfil" /> 

          <div>
            <strong>Olá, João</strong>
          </div>

          <FiChevronDown />
        </S.Profile>
      </S.Right>
    </S.Container>
  );
}

export default Navbar;
