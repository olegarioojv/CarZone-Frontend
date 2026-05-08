import * as S from "./styles";

const brands = [
  {
    id: 1,
    name: "Toyota",
    logo: "https://cdn.simpleicons.org/toyota/ffffff",
  },

  {
    id: 2,
    name: "Volkswagen",
    logo: "https://cdn.simpleicons.org/volkswagen/ffffff",
  },

  {
    id: 3,
    name: "Chevrolet",
    logo: "https://cdn.simpleicons.org/chevrolet/ffffff",
  },

  {
    id: 4,
    name: "Honda",
    logo: "https://cdn.simpleicons.org/honda/ffffff",
  },

  {
    id: 5,
    name: "Jeep",
    logo: "https://cdn.simpleicons.org/jeep/ffffff",
  },

  {
    id: 6,
    name: "Fiat",
    logo: "https://cdn.simpleicons.org/fiat/ffffff",
  },

  {
    id: 7,
    name: "Hyundai",
    logo: "https://cdn.simpleicons.org/hyundai/ffffff",
  },

  {
    id: 8,
    name: "Nissan",
    logo: "https://cdn.simpleicons.org/nissan/ffffff",
  },
];

export function PopularBrands() {
  return (
    <S.Container>
      <S.Header>
        <h2>MARCAS MAIS PROCURADAS</h2>

        <button type="button">Ver todas</button>
      </S.Header>

      <S.BrandGrid>
        {brands.map((brand) => (
          <S.BrandCard key={brand.id}>
            <img src={brand.logo} alt={brand.name} />

            <span>{brand.name}</span>
          </S.BrandCard>
        ))}
      </S.BrandGrid>
    </S.Container>
  );
}

export default PopularBrands;
