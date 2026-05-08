import * as S from "./styles";

import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";

import { useState, useEffect } from "react";

import { api } from "../../services/api";

interface CarImage {
  id?: string;

  url: string;
}

interface Car {
  id: string;

  title: string;

  brand: string;

  model: string;

  year: number;

  price: number;

  km: number;

  images?: CarImage[];
}

interface CarsResponse {
  data: Car[];

  total: number;

  page: number;

  lastPage: number;
}

export function FeaturedCars() {
  const [startIndex, setStartIndex] = useState(0);

  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get<CarsResponse>("/cars");

        setCars(response.data.data);
      } catch (error) {
        console.error("Erro ao buscar carros:", error);
      }
    }

    fetchCars();
  }, []);

  function handleNext() {
    if (startIndex + 4 < cars.length) {
      setStartIndex((prev) => prev + 1);
    }
  }

  function handlePrev() {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  }

  return (
    <S.Container>
      <S.Header>
        <h2>CARROS EM DESTAQUE</h2>

        <S.Actions>
          <button type="button" onClick={handlePrev}>
            <FiChevronLeft />
          </button>

          <button type="button" onClick={handleNext}>
            <FiChevronRight />
          </button>
        </S.Actions>
      </S.Header>

      <S.CarGrid>
        {cars.slice(startIndex, startIndex + 4).map((car) => (
          <S.Card key={car.id}>
            <S.Image>
              <img
                src={
                  car.images && car.images.length > 0
                    ? car.images[0].url
                    : "https://via.placeholder.com/400x300"
                }
                alt={car.title}
              />

              <button type="button">
                <FiHeart />
              </button>
            </S.Image>

            <S.Info>
              <strong>
                {car.brand} {car.model}
              </strong>

              <span>
                {car.year} • {car.km.toLocaleString("pt-BR")} KM
              </span>

              <S.Footer>
                <h3>R$ {Number(car.price).toLocaleString("pt-BR")}</h3>

                <small>{car.km.toLocaleString("pt-BR")} km</small>
              </S.Footer>
            </S.Info>
          </S.Card>
        ))}
      </S.CarGrid>
    </S.Container>
  );
}

export default FeaturedCars;
