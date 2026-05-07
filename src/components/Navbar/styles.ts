import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 92px;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #050816;

  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  gap: 42px;
`;

export const Search = styled.div`
  width: 340px;
  height: 46px;

  border-radius: 12px;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.06);

  background: #0b1120;

  display: flex;

  input {
    flex: 1;

    background: transparent;

    border: 0;
    outline: none;

    color: white;

    padding: 0 16px;

    font-size: 14px;

    &::placeholder {
      color: #64748b;
    }
  }

  button {
    width: 54px;

    border: 0;

    background: transparent;

    color: #94a3b8;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      color: white;
    }
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;

  gap: 28px;

  a {
    color: #e2e8f0;

    font-size: 13px;
    font-weight: 700;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      color: #ef4444;
    }
  }

  .active {
    color: #ef4444;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  gap: 18px;
`;

export const IconButton = styled.button`
  width: 42px;
  height: 42px;

  border-radius: 50%;

  border: 0;

  background: transparent;

  color: white;

  position: relative;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }

  span {
    width: 18px;
    height: 18px;

    border-radius: 50%;

    background: #ef4444;

    color: white;

    font-size: 11px;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    top: 4px;
    right: 2px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  color: white;

  cursor: pointer;

  img {
    width: 42px;
    height: 42px;

    border-radius: 50%;

    object-fit: cover;
  }

  strong {
    font-size: 14px;
  }

  svg {
    color: #94a3b8;
  }
`;
