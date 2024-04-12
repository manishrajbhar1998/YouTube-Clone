import React, { createContext, useEffect, useState } from "react";

import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState("");

  useEffect(()=>{
    fetchSelectedCategoryData(selectCategories)
  },[selectCategories]);

  const fetchSelectedCategoryData = async (query) =>{
    setLoading(true);
    try{
      const data = await fetchDataFromApi(`search/?q=${query}`);
      console.log(data);
      setLoading(false);

    }catch{

    }
  }

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};
