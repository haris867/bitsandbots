import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function calculateTotalPrice(gameList) {
  return gameList.reduce((total, game) => total + game.price, 0);
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}
