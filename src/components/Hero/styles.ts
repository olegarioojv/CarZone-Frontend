import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 560px;

  border-radius: 24px;

  background:
    radial-gradient(
      circle at top right,
      rgba(239, 68, 68, 0.18),
      transparent 30%
    ),
    #050816;

  border: 1px solid rgba(255, 255, 255, 0.04);

  padding: 42px 42px 160px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  position: relative;
`;

export const Content = styled.div`
  max-width: 480px;

  z-index: 2;

  span {
    color: white;

    font-size: 52px;
    font-weight: 800;

    line-height: 1.1;

    display: block;
  }

  h1 {
    color: #ef4444;

    font-size: clamp(36px, 4vw, 58px);
    font-weight: 900;

    margin-top: 8px;

    line-height: 1.1;
  }

  p {
    color: #ffffff;

    font-size: 18px;

    margin-top: 22px;

    line-height: 1.7;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  gap: 18px;

  margin-top: 36px;

  button {
    height: 54px;

    padding: 0 28px;

    border-radius: 14px;

    border: 0;

    font-size: 14px;
    font-weight: 700;

    cursor: pointer;

    transition: 0.2s;
  }

  .primary {
    background: #ef4444;

    color: white;

    &:hover {
      transform: translateY(-2px);
    }
  }

  .secondary {
    background: transparent;

    color: white;

    border: 1px solid rgba(255, 255, 255, 0.12);

    &:hover {
      background: rgba(255, 255, 255, 0.04);
    }
  }
`;

export const Image = styled.div`
  position: absolute;

  top: 0;
  right: 0;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  z-index: 1;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    object-position: right bottom;
  }
`;

export const Features = styled.div`
  position: absolute;

  left: 32px;
  right: 32px;
  bottom: 32px;

  height: 92px;

  border-radius: 18px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02)
  );

  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);

  border: 1px solid rgba(255, 255, 255, 0.04);

  backdrop-filter: blur(12px);

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  overflow: hidden;

  z-index: 5;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);

    height: auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  padding: 0 24px;

  border-right: 1px solid rgba(255, 255, 255, 0.04);

  .icon {
    width: 44px;
    height: 44px;

    border-radius: 50%;

    background: rgba(239, 68, 68, 0.12);

    display: flex;
    align-items: center;
    justify-content: center;

    color: #ef4444;

    font-size: 18px;

    flex-shrink: 0;
  }

  strong {
    display: block;

    color: white;

    font-size: 14px;
    font-weight: 700;
  }

  span {
    color: #ffffff;

    font-size: 13px;

    margin-top: 4px;

    display: block;
  }

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 1200px) {
    height: 92px;

    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }
`;
