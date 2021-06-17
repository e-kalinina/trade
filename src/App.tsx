import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "./components/Button/Button";
import Trade from "./components/Trade/Trade";
import TradeList from "./components/TradeList/TradeList";
import Spinner from "./components/Spinner/Spinner";

import { getIsLoading } from "./redux/tradeSelectors";
import { actions } from "./redux/tradeReducer";

import "./App.scss";

const App: FC<{}> = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const openTradeHandler = () => {
    dispatch(actions.setIsOpen());
  };

  return (
    <div className="wrapper">
      <Trade />
      <Button
        text="Open Trade"
        className="primary"
        onClick={openTradeHandler}
      />
      {isLoading ? <Spinner /> : <TradeList />}
    </div>
  );
};

export default App;
