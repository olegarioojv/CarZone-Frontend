import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  min-height: 100vh;

  display: flex;

  flex-direction: column;

  background: #020617;
`;

export const PageContent = styled.div`
  width: 100%;

  display: flex;

  flex: 1;
`;

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Main = styled.main`
  width: 100%;

  padding: 24px;

  flex: 1;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Header = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  margin-bottom: 28px;

  flex-wrap: wrap;

  h1 {
    color: white;

    font-size: 42px;
    font-weight: 800;

    line-height: 1.1;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }

  span {
    color: #94a3b8;

    margin-top: 6px;

    display: block;

    font-size: 15px;

    strong {
      color: #ef4444;
    }
  }
`;

export const Actions = styled.div`
  display: flex;

  align-items: center;

  gap: 14px;

  select {
    width: 220px;

    height: 48px;

    border-radius: 14px;

    border: 1px solid rgba(255, 255, 255, 0.06);

    background: #0f172a;

    color: white;

    padding: 0 16px;

    outline: none;

    font-size: 14px;

    transition: 0.2s;

    cursor: pointer;

    &:focus {
      border-color: rgba(239, 68, 68, 0.35);
    }
  }
`;

export const FiltersRow = styled.div`
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 12px;

  margin-bottom: 30px;

  button {
    height: 40px;

    padding: 0 18px;

    border-radius: 999px;

    border: 1px solid rgba(255, 255, 255, 0.06);

    background: #0f172a;

    color: white;

    font-size: 13px;
    font-weight: 500;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      border-color: rgba(239, 68, 68, 0.2);

      background: rgba(239, 68, 68, 0.08);
    }
  }
`;

export const Loading = styled.div`
  width: 100%;

  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #94a3b8;

  font-size: 18px;
  font-weight: 600;
`;

export const CarsGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 22px;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #0b1120;

  border-radius: 22px;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.04);

  transition: 0.25s;

  cursor: pointer;

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(239, 68, 68, 0.16);
  }
`;

export const Image = styled.div`
  position: relative;

  width: 100%;

  height: 240px;

  overflow: hidden;

  img {
    width: 100%;

    height: 100%;

    object-fit: cover;
  }

  button {
    position: absolute;

    top: 14px;
    right: 14px;

    width: 40px;
    height: 40px;

    border-radius: 50%;

    border: 0;

    background: rgba(15, 23, 42, 0.9);

    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      background: #ef4444;
    }

    svg {
      font-size: 18px;
    }
  }
`;

export const Info = styled.div`
  padding: 20px;

  strong {
    display: block;

    color: white;

    font-size: 20px;
    font-weight: 700;

    line-height: 1.3;
  }

  span {
    display: block;

    margin-top: 10px;

    color: #94a3b8;

    font-size: 14px;
  }
`;

export const Footer = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-top: 22px;

  gap: 14px;

  h3 {
    color: white;

    font-size: 26px;
    font-weight: 800;
  }

  small {
    background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);

    color: white;

    padding: 8px 12px;

    border-radius: 10px;

    font-size: 12px;
    font-weight: 700;
  }
`;

export const Pagination = styled.div`
  width: 100%;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 12px;

  margin-top: 40px;

  flex-wrap: wrap;

  button {
    min-width: 48px;

    height: 48px;

    padding: 0 18px;

    border-radius: 14px;

    border: 1px solid rgba(255, 255, 255, 0.06);

    background: #0f172a;

    color: white;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      border-color: rgba(239, 68, 68, 0.2);

      background: rgba(239, 68, 68, 0.08);
    }

    &:disabled {
      opacity: 0.4;

      cursor: not-allowed;
    }

    &.active {
      background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);

      border-color: transparent;
    }
  }
`;
