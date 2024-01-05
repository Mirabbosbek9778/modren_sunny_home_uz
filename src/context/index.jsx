/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Axios from "axios";
import { useEffect, useState } from "react";
import { CoinContext } from "./Coin";

export const GlobalProvider = ({ children }) => {
  const [productCard, setProductCard] = useState([]);
  const [newCard, setNewsCard] = useState([]);
  const [dataGallery, setDataGallery] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [dataLanguage, setLanguage] = useState([]);

  useEffect(() => {
    // product api
    const getData = async () => {
      try {
        const response = await Axios.get("https://api.mshome.uz/api/products/");
        setProductCard(response?.data);
      } catch (error) {
        console.error("There was a problem with the Axios request:", error);
      }
    };
    // news card api
    const getNews = async () => {
      try {
        const response = await Axios.get("https://api.mshome.uz/api/news/");
        setNewsCard(response?.data);
      } catch (error) {
        console.error("There was a problem with the Axios request:", error);
      }
    };

    // gallery api
    const getGallery = async () => {
      try {
        const response = await Axios.get("https://api.mshome.uz/api/gallery/");
        setDataGallery(response?.data);
      } catch (error) {
        console.error("There was a problem with the Axios request:", error);
      } finally {
        setisLoading(false);
      }
    };

    // get Language api
    const getLanguage = () => {
      fetch("https://api.mshome.uz/api/params/4/")
        .then((response) => response.json())
        .then((data) => setLanguage(data))
        .catch((error) => console.error("Error fetching data:", error));
    };

    getLanguage();
    getNews();
    getGallery();
    getData();
  }, []);

  return (
    <CoinContext.Provider
      value={{
        productCard,
        newCard,
        dataGallery,
        isLoading,
        dataLanguage,
        setLanguage,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};
