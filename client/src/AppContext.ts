import { createContext } from "react";

export interface IAppContext {
  sidebar: boolean;
}

const defaultContext = {
  sidebar: false
};

export default createContext<IAppContext>(defaultContext);
