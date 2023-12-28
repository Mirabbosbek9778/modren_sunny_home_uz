/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Axios from "axios";
import { useEffect, useState } from "react";
import { CoinContext } from "./Coin";

export const GlobalProvider = ({ children }) => {
  const [productCard, setProductCard] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Axios.get("https://api.mshome.uz/api/products/");
        setProductCard(response.data);
      } catch (error) {
        console.error("There was a problem with the Axios request:", error);
      }
    };
    getData();
  }, []);

  return (
    <CoinContext.Provider value={{ productCard }}>
      {children}
    </CoinContext.Provider>
  );
};

// GlobalProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
