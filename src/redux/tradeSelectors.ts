import { AppStateType } from "./ReduxStore";

export const getIsOpen = (state: AppStateType) => {
  return state.isOpen;
};

export const getTrades = (state: AppStateType) => {
  return state.Trade;
};

export const getIsLoading = (state: AppStateType) => {
  return state.isLoading;
};
