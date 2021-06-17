import { FC } from "react";
import { useSelector } from "react-redux";

import TradeItem from "./TradeItem";

import { getTrades } from "../../redux/tradeSelectors";

import "./tradeList.scss";

const TradeList: FC<{}> = () => {
  const trades = useSelector(getTrades);

  const tradeList =
    trades && trades.map((trade) => <TradeItem key={trade.id} trade={trade} />);

  return <div className="tradeContainer">{tradeList}</div>;
};

export default TradeList;
