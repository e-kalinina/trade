import { FC } from "react";

import { TradeType } from "../../redux/tradeReducer";

import "./tradeList.scss";

interface ITradeItemProps {
  trade: TradeType;
}

const TradeItem: FC<ITradeItemProps> = ({ trade }) => {
  return (
    <div className="tradeCard">
      <span>{trade.amount}</span>
      <span>{trade.currency}</span>
    </div>
  );
};

export default TradeItem;
