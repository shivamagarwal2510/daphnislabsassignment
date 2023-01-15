import { createContext, useState } from "react";

export const TitleSearchContext = createContext({
  titleSearch: "",
  setTitleSearch: () => "",
});

export const TitleSearchProvider = ({ children }) => {
  const [titleSearch, setTitleSearch] = useState("");
  const value = { titleSearch, setTitleSearch };
  return (
    <TitleSearchContext.Provider value={value}>
      {children}
    </TitleSearchContext.Provider>
  );
};
