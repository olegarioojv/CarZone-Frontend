import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;

  background:
    radial-gradient(circle at top, rgba(239, 68, 68, 0.04), transparent 25%),
    #020617;

  overflow-x: hidden;
`;

export const Content = styled.div`
  flex: 1;

  width: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const Main = styled.main`
  width: 100%;

  max-width: 1680px;

  margin: 0 auto;

  flex: 1;

  padding: 28px;

  display: flex;
  flex-direction: column;

  gap: 28px;

  @media (max-width: 1200px) {
    padding: 24px;
  }

  @media (max-width: 768px) {
    padding: 16px;

    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;
