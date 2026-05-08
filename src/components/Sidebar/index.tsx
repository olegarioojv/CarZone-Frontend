import * as S from "./styles";

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

import { useEffect, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { api } from "../../services/api";

import logo from "../../assets/logo.png";

interface Category {
  name: string;

  total: number;
}

export function Sidebar() {
  const navigate = useNavigate();

  const location = useLocation();

  // 📂 categorias
  const [categories, setCategories] = useState<Category[]>([]);

  // 🚘 marcas
  const [brands, setBrands] = useState<string[]>([]);

  // 🚗 modelos
  const [models, setModels] = useState<string[]>([]);

  // 🔍 filtros
  const [brand, setBrand] = useState("");

  const [model, setModel] = useState("");

  const [minPrice, setMinPrice] = useState("");

  const [maxPrice, setMaxPrice] = useState("");

  const [minYear, setMinYear] = useState("");

  const [maxYear, setMaxYear] = useState("");

  // 🚀 carregar dados
  useEffect(() => {
    async function loadData() {
      try {
        const [categoriesResponse, brandsResponse, modelsResponse] =
          await Promise.all([
            api.get("/cars/categories"),

            api.get("/cars/brands"),

            api.get("/cars/models"),
          ]);

        setCategories(categoriesResponse.data);

        setBrands(brandsResponse.data);

        setModels(modelsResponse.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, []);

  // 🔍 aplicar filtros
  function handleFilter() {
    const params = new URLSearchParams();

    if (brand) {
      params.append("brand", brand);
    }

    if (model) {
      params.append("model", model);
    }

    if (minPrice) {
      params.append("minPrice", minPrice);
    }

    if (maxPrice) {
      params.append("maxPrice", maxPrice);
    }

    if (minYear) {
      params.append("minYear", minYear);
    }

    if (maxYear) {
      params.append("maxYear", maxYear);
    }

    navigate(`/cars?${params.toString()}`);
  }

  // 🧹 limpar filtros
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
        <S.MenuItem
          active={location.pathname === "/"}
          onClick={() => navigate("/")}>
          <FiHome />

          <span>Início</span>
        </S.MenuItem>

        <S.MenuItem
          active={location.pathname === "/cars"}
          onClick={() => navigate("/cars")}>
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
          <S.CategoryItem
            key={category.name}
            onClick={() => navigate(`/cars?category=${category.name}`)}>
            <span>{category.name}</span>

            <strong>{category.total}</strong>
          </S.CategoryItem>
        ))}
      </S.CategoryList>

      <S.Divider />

      <S.SectionTitle>FILTROS RÁPIDOS</S.SectionTitle>

      <S.Filters>
        {/* 🚘 Marca */}
        <S.FilterGroup>
          <S.Label>Marca</S.Label>

          <S.Select value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="">Selecione a marca</option>

            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </S.Select>
        </S.FilterGroup>

        {/* 🚗 Modelo */}
        <S.FilterGroup>
          <S.Label>Modelo</S.Label>

          <S.Select value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="">Selecione o modelo</option>

            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </S.Select>
        </S.FilterGroup>

        {/* 💰 preço */}
        <S.Grid>
          <S.FilterGroup>
            <S.Label>Preço mínimo</S.Label>

            <S.Input
              type="number"
              placeholder="R$ 0"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </S.FilterGroup>

          <S.FilterGroup>
            <S.Label>Preço máximo</S.Label>

            <S.Input
              type="number"
              placeholder="R$ 500.000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </S.FilterGroup>
        </S.Grid>

        {/* 📅 ano */}
        <S.Grid>
          <S.FilterGroup>
            <S.Label>Ano mínimo</S.Label>

            <S.Input
              type="number"
              placeholder="2015"
              value={minYear}
              onChange={(e) => setMinYear(e.target.value)}
            />
          </S.FilterGroup>

          <S.FilterGroup>
            <S.Label>Ano máximo</S.Label>

            <S.Input
              type="number"
              placeholder="2025"
              value={maxYear}
              onChange={(e) => setMaxYear(e.target.value)}
            />
          </S.FilterGroup>
        </S.Grid>

        <S.ButtonGroup>
          <S.PrimaryButton type="button" onClick={handleFilter}>
            VER CARROS
          </S.PrimaryButton>

          <S.SecondaryButton type="button" onClick={handleClearFilters}>
            LIMPAR
          </S.SecondaryButton>
        </S.ButtonGroup>
      </S.Filters>
    </S.Container>
  );
}

export default Sidebar;
