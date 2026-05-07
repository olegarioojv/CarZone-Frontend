import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  :root {
    /* Desktop Full HD */
    --container-padding: 28px;
    --sidebar-width: 300px;

    --title-size: 58px;
    --subtitle-size: 18px;

    --card-gap: 24px;
  }

  html {
    scroll-behavior: smooth;

    font-size: 16px;
  }

  body {
    background: #020617;

    color: white;

    font-family:
      Inter,
      sans-serif;

    overflow-x: hidden;

    -webkit-font-smoothing: antialiased;
  }

  button,
  input,
  textarea,
  select {
    font-family:
      Inter,
      sans-serif;
  }

  a {
    text-decoration: none;

    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;

    display: block;
  }

  /* ========================= */
  /* NOTEBOOK HD */
  /* 1366x768 */
  /* ========================= */

  @media (max-width: 1600px) {
    :root {
      --container-padding: 24px;

      --sidebar-width: 280px;

      --title-size: 52px;
      --subtitle-size: 17px;

      --card-gap: 20px;
    }

    html {
      font-size: 15px;
    }
  }

  /* ========================= */
  /* NOTEBOOK PEQUENO */
  /* ========================= */

  @media (max-width: 1366px) {
    :root {
      --container-padding: 20px;

      --sidebar-width: 260px;

      --title-size: 46px;
      --subtitle-size: 16px;

      --card-gap: 18px;
    }

    html {
      font-size: 14px;
    }
  }

  /* ========================= */
  /* TABLET */
  /* ========================= */

  @media (max-width: 1024px) {
    :root {
      --container-padding: 18px;

      --sidebar-width: 240px;

      --title-size: 40px;
      --subtitle-size: 15px;

      --card-gap: 16px;
    }

    html {
      font-size: 14px;
    }
  }

  /* ========================= */
  /* MOBILE */
  /* ========================= */

  @media (max-width: 768px) {
    :root {
      --container-padding: 16px;

      --sidebar-width: 100%;

      --title-size: 34px;
      --subtitle-size: 14px;

      --card-gap: 14px;
    }

    html {
      font-size: 13px;
    }
  }

  /* ========================= */
  /* MOBILE PEQUENO */
  /* ========================= */

  @media (max-width: 480px) {
    :root {
      --container-padding: 12px;

      --title-size: 28px;
      --subtitle-size: 13px;

      --card-gap: 12px;
    }

    html {
      font-size: 12px;
    }
  }
`;