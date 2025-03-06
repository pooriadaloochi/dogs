import { useContext } from "react";
import { TrAppActionContext, TrAppContext } from "./TrAppContext.context.tsx";

export const useAppReducer = () => {
  return useContext(TrAppActionContext);
};

export const useTrAppState = () => {
  return useContext(TrAppContext);
};
