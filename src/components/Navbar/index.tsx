import * as S from "./styles";

import { FiSearch, FiHeart, FiBell, FiChevronDown } from "react-icons/fi";

import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import avatarFallback from "../../assets/avatar.jpeg";

interface User {
  id: string;

  name: string;

  avatar?: string;
}

interface Favorite {
  id: string;
}

interface Notification {
  id: string;
}

export function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();

  const [search, setSearch] = useState("");

  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const [notifications, setNotifications] = useState<Notification[]>([]);

  const [user, setUser] = useState<User | null>(null);

  // 🚀 carregar dados backend
  useEffect(() => {
    async function loadData() {
      try {
        const token = localStorage.getItem("@carzone/token");

        if (!token) return;

        const [userResponse, favoritesResponse, notificationsResponse] =
          await Promise.all([
            api.get("/users/me"),

            api.get("/favorites"),

            api.get("/notifications"),
          ]);

        setUser(userResponse.data);

        setFavorites(favoritesResponse.data);

        setNotifications(notificationsResponse.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, []);

  // 🔍 buscar carros
  function handleSearch() {
    if (!search.trim()) {
      navigate("/cars");

      return;
    }

    navigate(`/cars?search=${search}`);
  }

  // ⌨️ enter busca
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <S.Container>
      <S.Left>
        {/* 🔍 busca */}
        <S.Search>
          <input
            type="text"
            placeholder="Buscar por marca, modelo ou ano..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button type="button" onClick={handleSearch}>
            <FiSearch />
          </button>
        </S.Search>

        {/* 📂 menu */}
        <S.Menu>
          <a
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => navigate("/")}>
            INÍCIO
          </a>

          <a
            className={location.pathname === "/cars" ? "active" : ""}
            onClick={() => navigate("/cars")}>
            CARROS
          </a>

          <a onClick={() => navigate("/sell")}>VENDER</a>

          <a onClick={() => navigate("/financing")}>FINANCIAMENTO</a>

          <a onClick={() => navigate("/services")}>SERVIÇOS</a>

          <a onClick={() => navigate("/contact")}>CONTATO</a>
        </S.Menu>
      </S.Left>

      {/* 👤 direita */}
      <S.Right>
        {/* ❤️ favoritos */}
        <S.IconButton type="button" onClick={() => navigate("/favorites")}>
          <FiHeart />

          {favorites.length > 0 && <span>{favorites.length}</span>}
        </S.IconButton>

        {/* 🔔 notificações */}
        <S.IconButton type="button" onClick={() => navigate("/notifications")}>
          <FiBell />

          {notifications.length > 0 && <span>{notifications.length}</span>}
        </S.IconButton>

        {/* 👤 perfil */}
        <S.Profile onClick={() => navigate("/profile")}>
          <img src={user?.avatar || avatarFallback} alt="Perfil" />

          <div>
            <strong>{user ? `Olá, ${user.name}` : "Minha conta"}</strong>
          </div>

          <FiChevronDown />
        </S.Profile>
      </S.Right>
    </S.Container>
  );
}

export default Navbar;
