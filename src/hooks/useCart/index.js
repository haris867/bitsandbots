import { useState, useEffect } from "react";
import { load, save } from "../storage";

export default function useCart(gameData) {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    let cart = JSON.parse(load("cart")) || [];
    let found = cart.some((game) => game._id === gameData._id);
    setIsInCart(found);
  }, [gameData]);

  function handleCartClick(e) {
    e.preventDefault();

    let cart = JSON.parse(load("cart")) || [];

    let found = cart.some((game) => game._id === gameData._id);

    if (found) {
      cart = cart.filter((game) => game._id !== gameData._id);
    } else {
      let gameToCart = {
        _id: gameData._id,
        name: gameData.name,
        rating: gameData.rating,
        price: gameData.price,
        imageUrl: gameData.imageUrl,
      };
      cart.push(gameToCart);
    }

    save("cart", JSON.stringify(cart));
    setIsInCart(!found);
  }

  return [isInCart, handleCartClick];
}
