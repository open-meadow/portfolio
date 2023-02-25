import React, { useContext, useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AppContext.Provider value={{ activeIndex, setActiveIndex }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
