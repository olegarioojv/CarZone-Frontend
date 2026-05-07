import styled, { css } from "styled-components";

interface MenuItemProps {
  active?: boolean;
}

export const Container = styled.aside`
  width: 320px;
  min-height: 100vh;

  background: #060b16;

  border-right: 1px solid rgba(255, 255, 255, 0.04);

  padding: 24px 18px;

  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  width: 100%;

  img {
    width: 210px;
    object-fit: contain;
  }
`;

export const SectionTitle = styled.h2`
  color: #64748b;

  font-size: 13px;
  font-weight: 700;

  letter-spacing: 0.5px;

  margin-bottom: 14px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const MenuItem = styled.button<MenuItemProps>`
  width: 100%;
  height: 46px;

  border-radius: 14px;

  border: 1px solid transparent;

  background: transparent;

  outline: none;

  box-shadow: none;

  display: flex;
  align-items: center;

  gap: 12px;

  padding: 0 14px;

  color: #cbd5e1;

  cursor: pointer;

  transition:
    background 0.2s,
    color 0.2s,
    border 0.2s;

  svg {
    font-size: 18px;

    min-width: 18px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
  }

  &:hover {
    background: rgba(239, 68, 68, 0.12);

    border: 1px solid rgba(239, 68, 68, 0.12);

    color: white;
  }

  &:focus {
    outline: none;

    box-shadow: none;
  }

  ${({ active }) =>
    active &&
    css`
      background: linear-gradient(
        90deg,
        rgba(239, 68, 68, 0.22) 0%,
        rgba(239, 68, 68, 0.05) 100%
      );

      border: 1px solid rgba(239, 68, 68, 0.2);

      color: white;
    `}
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background: rgba(255, 255, 255, 0.06);

  margin: 28px 0;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 14px;
`;

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #cbd5e1;

  padding: 2px 0;

  span {
    font-size: 15px;
  }

  strong {
    color: #64748b;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Badge = styled.div`
  min-width: 20px;
  height: 20px;

  border-radius: 999px;

  background: #ef4444;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 11px;
  font-weight: 700;

  color: white;

  margin-left: auto;
`;

export const Filters = styled.div`
  margin-top: 28px;

  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const Select = styled.select`
  width: 100%;
  height: 44px;

  border-radius: 10px;

  border: 1px solid rgba(255, 255, 255, 0.06);

  background: #0f172a;

  color: white;

  padding: 0 14px;

  outline: none;

  font-size: 13px;
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 10px;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  height: 46px;

  border-radius: 12px;

  border: none;

  background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);

  color: white;

  font-size: 13px;
  font-weight: 700;

  margin-top: 6px;

  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;
  height: 50px;

  border-radius: 12px;

  border: 1px solid rgba(255, 255, 255, 0.06);

  background: #0f172a;

  color: white;

  font-size: 14px;
  font-weight: 700;

  transition: 0.2s;

  &:hover {
    background: #131c31;
  }
`;
