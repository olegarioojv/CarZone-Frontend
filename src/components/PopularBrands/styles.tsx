import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  margin-top: 32px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 18px;

  h2 {
    color: white;

    font-size: 22px;
    font-weight: 800;
  }

  button {
    border: 0;

    background: transparent;

    color: #ef4444;

    font-size: 14px;
    font-weight: 700;

    cursor: pointer;
  }
`;

export const BrandGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(8, 1fr);

  gap: 14px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BrandCard = styled.div`
  height: 90px;

  background: #0b1120;

  border-radius: 16px;

  border: 1px solid rgba(255, 255, 255, 0.04);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;

  transition: 0.25s;

  cursor: pointer;

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(239, 68, 68, 0.25);

    background: #111827;
  }

  img {
    width: 42px;
    height: 42px;

    object-fit: contain;
  }

  span {
    color: white;

    font-size: 13px;
    font-weight: 600;
  }
`;
