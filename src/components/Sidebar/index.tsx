import * as S from "./styles";

import { useEffect, useState } from "react";

import { api } from "../../services/api";

import {
  FiHome,
  FiTruck,
  FiHeart,
  FiDollarSign,
  FiShield,
  FiFileText,
  FiPhone,
  FiPlusCircle,
} from "react-icons/fi";

import logo from "../../assets/logo.png";

interface Category {
  name: string;
  total: number;
}

export function Sidebar() {
  const [categories, setCategories] = useState<Category[]>([]);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get("/cars/categories");

        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadCategories();
  }, []);

  async function handleFilter() {
    try {
      const response = await api.get("/cars", {
        params: {
          brand,
          model,
          minPrice,
          maxPrice,
          minYear,
          maxYear,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleClearFilters() {
    setBrand("");
    setModel("");

    setMinPrice("");
    setMaxPrice("");

    setMinYear("");
    setMaxYear("");
  }

  return (
    <S.Container>
      <S.Logo>
        <img src={logo} alt="CarZone" />
      </S.Logo>

      <S.SectionTitle>NAVEGAÇÃO</S.SectionTitle>

      <S.Menu>
        <S.MenuItem active={true}>
          <FiHome />

          <span>Início</span>
        </S.MenuItem>

        <S.MenuItem>
          <FiTruck />

          <span>Carros</span>
        </S.MenuItem>

        <S.MenuItem>
          <FiPlusCircle />

          <span>Vender meu carro</span>
        </S.MenuItem>

        <S.MenuItem>
          <FiHeart />

          <span>Favoritos</span>
        </S.MenuItem>

        <S.MenuItem>
          <FiDollarSign />

          <span>Financiamento</span>
        </S.MenuItem>

        <S.MenuItem>
          <FiShield />

          <span>Seguros</span>
        </S.MenuItem>

        <S.MenuItem>
          <FiFileText />

          <span>Blog</span>
        </S.MenuItem>

        <S.MenuItem>
          <FiPhone />

          <span>Contato</span>
        </S.MenuItem>
      </S.Menu>

      <S.Divider />

      <S.SectionTitle>CATEGORIAS</S.SectionTitle>

      <S.CategoryList>
        {categories.slice(0, 6).map((category) => (
          <S.CategoryItem key={category.name}>
            <span>{category.name}</span>

            <strong>{category.total}</strong>
          </S.CategoryItem>
        ))}
      </S.CategoryList>

      <S.Divider />

      <S.SectionTitle>FILTROS RÁPIDOS</S.SectionTitle>

      <S.Filters>
        <S.Select value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="">Todas as marcas</option>

          <option value="BMW">BMW</option>

          <option value="Toyota">Toyota</option>

          <option value="Honda">Honda</option>

          <option value="Jeep">Jeep</option>
        </S.Select>

        <S.Select value={model} onChange={(e) => setModel(e.target.value)}>
          <option value="">Todos os modelos</option>

          <option value="320i">320i</option>

          <option value="Corolla">Corolla</option>

          <option value="Civic">Civic</option>

          <option value="Compass">Compass</option>
        </S.Select>

        <S.Grid>
          <S.Select
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}>
            <option value="">Preço mínimo</option>

            <option value="50000">50 mil</option>

            <option value="100000">100 mil</option>

            <option value="200000">200 mil</option>
          </S.Select>

          <S.Select
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}>
            <option value="">Preço máximo</option>

            <option value="100000">100 mil</option>

            <option value="200000">200 mil</option>

            <option value="500000">500 mil</option>
          </S.Select>
        </S.Grid>

        <S.Grid>
          <S.Select
            value={minYear}
            onChange={(e) => setMinYear(e.target.value)}>
            <option value="">Ano mínimo</option>

            <option value="2020">2020</option>

            <option value="2021">2021</option>

            <option value="2022">2022</option>
          </S.Select>

          <S.Select
            value={maxYear}
            onChange={(e) => setMaxYear(e.target.value)}>
            <option value="">Ano máximo</option>

            <option value="2022">2022</option>

            <option value="2023">2023</option>

            <option value="2024">2024</option>
          </S.Select>
        </S.Grid>

        <S.PrimaryButton onClick={handleFilter}>VER CARROS</S.PrimaryButton>

        <S.SecondaryButton onClick={handleClearFilters}>
          LIMPAR FILTROS
        </S.SecondaryButton>
      </S.Filters>
    </S.Container>
  );
}

export default Sidebar;
