import { createContext, useContext, useEffect, useState } from "react";

const ReactReduxContext = createContext();
const ReactReduxDispatch = createContext();

export const useCustomSelector = (cb) => {
  const state = useContext(ReactReduxContext);
  const value = cb(state);
  return value;
};

export const useCustomDispatch = () => {
  return useContext(ReactReduxDispatch);
};

export const ReactReduxProvider = ({ children, store }) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
        setState(store.getState());
      console.log(store.getState());
    });
  }, [store]);

  return (
    <ReactReduxDispatch.Provider value={store.dispatch}>
      <ReactReduxContext.Provider value={state}>
        {children}
      </ReactReduxContext.Provider>
    </ReactReduxDispatch.Provider>
  );
};
