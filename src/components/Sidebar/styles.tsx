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

  position: sticky;

  top: 0;

  overflow-y: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1200px) {
    width: 280px;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 100%;

  margin-bottom: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 190px;

    object-fit: contain;
  }
`;

export const SectionTitle = styled.h2`
  color: #64748b;

  font-size: 11px;
  font-weight: 700;

  letter-spacing: 1.2px;

  margin-bottom: 14px;

  text-transform: uppercase;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const MenuItem = styled.button<MenuItemProps>`
  width: 100%;

  height: 50px;

  border-radius: 16px;

  border: 1px solid transparent;

  background: transparent;

  display: flex;
  align-items: center;

  gap: 14px;

  padding: 0 16px;

  color: #cbd5e1;

  cursor: pointer;

  transition: all 0.25s ease;

  outline: none;

  svg {
    font-size: 18px;

    min-width: 18px;

    transition: 0.2s;
  }

  span {
    font-size: 14px;
    font-weight: 500;
  }

  &:hover {
    background: rgba(239, 68, 68, 0.08);

    border-color: rgba(239, 68, 68, 0.14);

    color: white;

    transform: translateX(2px);

    svg {
      color: #ef4444;
    }
  }

  ${({ active }) =>
    active &&
    css`
      background: linear-gradient(
        90deg,
        rgba(239, 68, 68, 0.22) 0%,
        rgba(239, 68, 68, 0.04) 100%
      );

      border-color: rgba(239, 68, 68, 0.2);

      color: white;

      box-shadow: inset 0 0 0 1px rgba(239, 68, 68, 0.08);

      svg {
        color: #ef4444;
      }
    `}
`;

export const Divider = styled.div`
  width: 100%;

  height: 1px;

  background: rgba(255, 255, 255, 0.05);

  margin: 30px 0;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const CategoryItem = styled.button`
  width: 100%;

  height: 42px;

  border: 1px solid transparent;

  border-radius: 12px;

  background: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12px;

  cursor: pointer;

  transition: all 0.2s ease;

  color: #cbd5e1;

  &:hover {
    background: rgba(255, 255, 255, 0.03);

    border-color: rgba(255, 255, 255, 0.04);

    color: white;
  }

  span {
    font-size: 14px;

    font-weight: 500;
  }

  strong {
    color: #64748b;

    font-size: 12px;
    font-weight: 700;
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
  display: flex;
  flex-direction: column;

  gap: 14px;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const Label = styled.label`
  color: #94a3b8;

  font-size: 12px;
  font-weight: 600;

  padding-left: 2px;
`;

export const Select = styled.select`
  width: 100%;

  height: 48px;

  border-radius: 14px;

  border: 1px solid rgba(255, 255, 255, 0.06);

  background: #0f172a;

  color: white;

  padding: 0 14px;

  outline: none;

  font-size: 13px;

  transition: all 0.2s ease;

  cursor: pointer;

  appearance: none;

  &:focus {
    border-color: rgba(239, 68, 68, 0.4);

    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.08);
  }
`;

export const Input = styled.input`
  width: 100%;

  height: 48px;

  border-radius: 14px;

  border: 1px solid rgba(255, 255, 255, 0.06);

  background: #0f172a;

  color: white;

  padding: 0 14px;

  outline: none;

  font-size: 13px;

  transition: all 0.2s ease;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    border-color: rgba(239, 68, 68, 0.4);

    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.08);
  }
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  margin-top: 6px;
`;

export const PrimaryButton = styled.button`
  width: 100%;

  height: 50px;

  border-radius: 14px;

  border: 0;

  background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);

  color: white;

  font-size: 13px;
  font-weight: 700;

  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    opacity: 0.95;

    box-shadow: 0 12px 30px rgba(239, 68, 68, 0.2);
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;

  height: 50px;

  border-radius: 14px;

  border: 1px solid rgba(255, 255, 255, 0.06);

  background: #0f172a;

  color: white;

  font-size: 13px;
  font-weight: 700;

  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    background: #131c31;

    border-color: rgba(255, 255, 255, 0.1);
  }
`;
