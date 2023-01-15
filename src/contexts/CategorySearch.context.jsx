import { createContext, useState } from "react";

export const CategorySearchContext = createContext({
  categorySearch: "",
  setCategorySearch: () => "",
  
});

export const CategorySearchProvider = ({ children }) => {
  const [categorySearch, setCategorySearch] = useState("");
  const value = { categorySearch, setCategorySearch };
  return (
    <CategorySearchContext.Provider value={value}>{children}</CategorySearchContext.Provider>
  );
};
