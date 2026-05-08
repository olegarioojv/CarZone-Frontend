import * as S from "./styles";

import { useEffect, useState } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";

import Navbar from "../../components/Navbar";

import Sidebar from "../../components/Sidebar";

import { api } from "../../services/api";

import { FiHeart } from "react-icons/fi";

interface CarImage {
  id: string;

  url: string;
}

interface Car {
  id: string;

  title: string;

  brand: string;

  model: string;

  category: string;

  year: number;

  price: number;

  km: number;

  images: CarImage[];
}

interface CarsResponse {
  data: Car[];

  total: number;

  page: number;

  lastPage: number;
}

export function Cars() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const [cars, setCars] = useState<Car[]>([]);

  const [loading, setLoading] = useState(true);

  const [total, setTotal] = useState(0);

  const [lastPage, setLastPage] = useState(1);

  const [sort, setSort] = useState(searchParams.get("sort") || "recent");

  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  // 🔍 filtros URL
  const brand = searchParams.get("brand");

  const model = searchParams.get("model");

  const category = searchParams.get("category");

  const minPrice = searchParams.get("minPrice");

  const maxPrice = searchParams.get("maxPrice");

  const minYear = searchParams.get("minYear");

  const maxYear = searchParams.get("maxYear");

  const search = searchParams.get("search");

  // 🚀 buscar carros
  useEffect(() => {
    async function fetchCars() {
      try {
        setLoading(true);

        const response = await api.get<CarsResponse>("/cars", {
          params: {
            brand,
            model,
            category,
            minPrice,
            maxPrice,
            minYear,
            maxYear,
            search,
            sort,
            page,
            limit: 12,
          },
        });

        setCars(response.data.data);

        setTotal(response.data.total);

        setLastPage(response.data.lastPage);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, [
    brand,
    model,
    category,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
    search,
    sort,
    page,
  ]);

  // 🔥 remover filtro
  function removeFilter(key: string) {
    const params = new URLSearchParams(searchParams);

    params.delete(key);

    params.set("page", "1");

    setSearchParams(params);

    setPage(1);
  }

  // 🔥 ordenação
  function handleSort(value: string) {
    setSort(value);

    const params = new URLSearchParams(searchParams);

    params.set("sort", value);

    params.set("page", "1");

    setSearchParams(params);

    setPage(1);
  }

  // 🔥 paginação
  function handlePageChange(newPage: number) {
    setPage(newPage);

    const params = new URLSearchParams(searchParams);

    params.set("page", String(newPage));

    setSearchParams(params);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <S.Container>
      <Sidebar />

      <S.Content>
        <Navbar />

        <S.Main>
          {/* 🔥 header */}
          <S.Header>
            <div>
              <h1>Carros à venda</h1>

              <span>
                Encontramos <strong>{total}</strong> carros
              </span>
            </div>

            <S.Actions>
              <select value={sort} onChange={(e) => handleSort(e.target.value)}>
                <option value="recent">Mais recentes</option>

                <option value="price_asc">Menor preço</option>

                <option value="price_desc">Maior preço</option>
              </select>
            </S.Actions>
          </S.Header>

          {/* 🔍 filtros ativos */}
          <S.FiltersRow>
            {brand && (
              <button onClick={() => removeFilter("brand")}>{brand} ✕</button>
            )}

            {model && (
              <button onClick={() => removeFilter("model")}>{model} ✕</button>
            )}

            {category && (
              <button onClick={() => removeFilter("category")}>
                {category} ✕
              </button>
            )}

            {maxPrice && (
              <button onClick={() => removeFilter("maxPrice")}>
                Até R$ {Number(maxPrice).toLocaleString("pt-BR")} ✕
              </button>
            )}

            {minYear && (
              <button onClick={() => removeFilter("minYear")}>
                A partir de {minYear} ✕
              </button>
            )}
          </S.FiltersRow>

          {/* 🚘 carros */}
          {loading ? (
            <S.Loading>Carregando carros...</S.Loading>
          ) : (
            <>
              <S.CarsGrid>
                {cars.map((car) => (
                  <S.Card
                    key={car.id}
                    onClick={() => navigate(`/cars/${car.id}`)}>
                    <S.Image>
                      <img src={car.images?.[0]?.url} alt={car.title} />

                      <button type="button">
                        <FiHeart />
                      </button>
                    </S.Image>

                    <S.Info>
                      <strong>
                        {car.brand} {car.model}
                      </strong>

                      <span>
                        {car.year} • {car.category}
                      </span>

                      <S.Footer>
                        <h3>R$ {Number(car.price).toLocaleString("pt-BR")}</h3>

                        <small>{car.km.toLocaleString("pt-BR")} km</small>
                      </S.Footer>
                    </S.Info>
                  </S.Card>
                ))}
              </S.CarsGrid>

              {/* 🔥 paginação */}
              <S.Pagination>
                <button
                  disabled={page === 1}
                  onClick={() => handlePageChange(page - 1)}>
                  Anterior
                </button>

                {Array.from(
                  {
                    length: lastPage,
                  },
                  (_, index) => (
                    <button
                      key={index}
                      className={page === index + 1 ? "active" : ""}
                      onClick={() => handlePageChange(index + 1)}>
                      {index + 1}
                    </button>
                  ),
                )}

                <button
                  disabled={page === lastPage}
                  onClick={() => handlePageChange(page + 1)}>
                  Próxima
                </button>
              </S.Pagination>
            </>
          )}
        </S.Main>
      </S.Content>
    </S.Container>
  );
}

export default Cars;
