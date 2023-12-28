/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

export const CoinContext = createContext();

export const useGlobalContext = () => useContext(CoinContext);
