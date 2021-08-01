import React from 'react';
export type TGlobalContext = {
  products: Array<any>;
  setProducts: (prods: Array<any>) => void;
};

export const GlobalContext = React.createContext<TGlobalContext>({
  products: [],
  setProducts: () => {}
});

export const useGlobalContext = () => React.useContext(GlobalContext);
