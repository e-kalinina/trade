import { Action, applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import tradeReducer from "./tradeReducer";

type RootReducerType = typeof tradeReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type InferActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

export type BaseThunkType<A extends Action = Action, R = Promise<void>> =
  ThunkAction<R, AppStateType, unknown, A>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  tradeReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
