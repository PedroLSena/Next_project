import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ProductType } from "../components/services/products";

type CartContextType = {
  cart: ProductType[];
  addProduct: (product: ProductType) => void;
  removeProduct: (productId: number) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("shopping-cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  const addProduct = (product: ProductType) => {
    const updatedCart = [...cart, product];
    localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const removeProduct = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
