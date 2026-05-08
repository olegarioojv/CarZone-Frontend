import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;

  margin-top: 40px;

  padding: 32px;

  border-radius: 24px;

  background:
    radial-gradient(
      circle at top right,
      rgba(239, 68, 68, 0.12),
      transparent 30%
    ),
    #050816;

  border: 1px solid rgba(255, 255, 255, 0.04);
`;

export const Content = styled.div`
  display: grid;

  grid-template-columns:
    1.4fr
    1fr
    1fr
    1fr
    1.2fr;

  gap: 42px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Brand = styled.div`
  img {
    width: 150px;

    object-fit: contain;
  }

  p {
    margin-top: 18px;

    color: #94a3b8;

    font-size: 14px;

    line-height: 1.8;

    max-width: 260px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  h3 {
    color: white;

    font-size: 14px;
    font-weight: 800;

    margin-bottom: 8px;
  }

  a {
    color: #94a3b8;

    font-size: 14px;

    transition: 0.2s;

    &:hover {
      color: white;
    }
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  color: #94a3b8;

  font-size: 14px;

  svg {
    color: #ef4444;
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  margin-top: 12px;

  button {
    width: 38px;
    height: 38px;

    border-radius: 50%;

    border: 1px solid rgba(255, 255, 255, 0.08);

    background: transparent;

    color: white;

    cursor: pointer;

    transition: 0.25s;

    &:hover {
      background: #ef4444;

      border-color: #ef4444;

      transform: translateY(-2px);
    }
  }
`;

export const Bottom = styled.div`
  margin-top: 32px;

  padding-top: 24px;

  border-top: 1px solid rgba(255, 255, 255, 0.06);

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #64748b;

    font-size: 13px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    gap: 20px;
  }
`;

export const ScrollTop = styled.button`
  width: 42px;
  height: 42px;

  border-radius: 50%;

  border: 1px solid rgba(255, 255, 255, 0.08);

  background: transparent;

  color: white;

  cursor: pointer;

  transition: 0.25s;

  &:hover {
    background: #ef4444;

    border-color: #ef4444;
  }
`;
