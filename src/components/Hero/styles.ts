import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 420px;

  border-radius: 24px;

  background:
    radial-gradient(
      circle at top right,
      rgba(239, 68, 68, 0.18),
      transparent 30%
    ),
    #050816;

  border: 1px solid rgba(255, 255, 255, 0.04);

  padding: 42px;

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

    font-size: 44px;
    font-weight: 900;

    margin-top: 8px;

    line-height: 1.1;
  }

  p {
    color: #94a3b8;

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
  align-items: center;
  justify-content: flex-end;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    opacity: 0.95;
  }
`;
