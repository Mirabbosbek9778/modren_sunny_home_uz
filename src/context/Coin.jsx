import { createContext, useContext } from "react";

export const CoinContext = createContext();

export const useGlobalContext = () => useContext(CoinContext);
