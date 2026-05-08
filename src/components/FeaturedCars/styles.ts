import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 22px;

  h2 {
    color: white;

    font-size: 24px;
    font-weight: 800;

    letter-spacing: 0.5px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  button {
    width: 42px;
    height: 42px;

    border-radius: 50%;

    border: 1px solid rgba(255, 255, 255, 0.04);

    background: #0f172a;

    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: 0.25s;

    &:hover {
      background: #ef4444;

      border-color: #ef4444;

      transform: translateY(-2px);
    }
  }
`;

export const CarGrid = styled.div`
  display: flex;

  gap: 18px;

  overflow-x: auto;

  scroll-behavior: smooth;

  padding-bottom: 8px;

  scrollbar-width: thin;

  scrollbar-color: rgba(255, 255, 255, 0.12) transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.12);

    border-radius: 999px;
  }
`;

export const Card = styled.div`
  min-width: calc((100% - 54px) / 4);

  max-width: calc((100% - 54px) / 4);

  flex-shrink: 0;

  background: #0b1120;

  border-radius: 18px;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.04);

  transition:
    transform 0.25s,
    border-color 0.25s,
    box-shadow 0.25s;

  cursor: pointer;

  &:hover {
    transform: translateY(-6px);

    border-color: rgba(239, 68, 68, 0.2);

    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
  }
`;

export const Image = styled.div`
  position: relative;

  width: 100%;
  height: 200px;

  overflow: hidden;

  background: #111827;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: transform 0.4s;
  }

  button {
    position: absolute;

    top: 14px;
    right: 14px;

    width: 36px;
    height: 36px;

    border-radius: 50%;

    border: 0;

    background: rgba(15, 23, 42, 0.82);

    backdrop-filter: blur(8px);

    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      background: #ef4444;
    }
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

export const Info = styled.div`
  padding: 18px;

  strong {
    display: block;

    color: white;

    font-size: 18px;
    font-weight: 700;

    line-height: 1.3;
  }

  span {
    display: block;

    color: #94a3b8;

    font-size: 13px;

    margin-top: 8px;

    line-height: 1.5;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  margin-top: 18px;

  h3 {
    color: white;

    font-size: 24px;
    font-weight: 800;

    line-height: 1;
  }

  small {
    background: #ef4444;

    color: white;

    padding: 6px 10px;

    border-radius: 8px;

    font-size: 12px;
    font-weight: 700;

    white-space: nowrap;
  }
`;
