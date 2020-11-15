import React, { createContext, useState } from "react";

export const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [state, setState] = useState("desde el context"); // this is not used, it is an example

  // everything in the value is going to be made available to all the
  // children components of this context provider
  return (
    <CategoriesContext.Provider value={{ state, setState }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
