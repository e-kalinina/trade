import { BaseThunkType, InferActionsTypes } from "./ReduxStore";
import { SET_IS_OPEN, ADD_TRADE, SET_IS_LOADING } from "./types";

import { sleep } from "../utils";

export type TradeType = {
  amount: number;
  currency: string;
  id: string;
};
export type InitialState = typeof initialState;

type ThunkType = BaseThunkType<ActionsTypes>;

let initialState = {
  Trade: [] as Array<TradeType>,
  isOpen: false,
  isLoading: false,
};

type ActionsTypes = InferActionsTypes<typeof actions>;

const tradeReducer = (
  state = initialState,
  action: ActionsTypes
): InitialState => {
  switch (action.type) {
    case SET_IS_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_TRADE:
      return {
        ...state,
        Trade: [...state.Trade, action.trade],
        isLoading: false,
      };
    default:
      return state;
  }
};

export const actions = {
  setIsOpen: () => ({ type: SET_IS_OPEN } as const),
  setIsLoading: () => ({ type: SET_IS_LOADING } as const),
  addTrade: (trade: TradeType) => ({ type: ADD_TRADE, trade } as const),
};

export const addNewTrade = (trade: TradeType): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.setIsOpen());
    dispatch(actions.setIsLoading());

    try {
      await sleep(2000);
      dispatch(actions.addTrade(trade));
    } catch (error) {
      console.log("Error: ", error);
    }
  };
};

export default tradeReducer;
