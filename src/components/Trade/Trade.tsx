import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import cross from "../../assets/cross-sign.png";

import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import Button from "../Button/Button";

import { getIsOpen } from "../../redux/tradeSelectors";
import { addNewTrade, actions } from "../../redux/tradeReducer";
import { currencyList } from "../../constants";

import "./trade.scss";

export type ItemsType = {
  value: string;
  id: number;
};

export interface iDropdown {
  items: Array<ItemsType>;
  showItems: boolean;
  selectedItem: ItemsType;
}

const Trade: FC<{}> = () => {
  const [close, setClose] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [state, setState] = useState<iDropdown>({
    items: currencyList,
    showItems: false,
    selectedItem: currencyList && currencyList[0],
  });
  const isOpen = useSelector(getIsOpen);
  const dispatch = useDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validNumber = e.target.validity.valid ? e.target.value : value;
    setValue(validNumber);
  };

  const showDropdown = (isRef: boolean) => {
    setState({ ...state, showItems: isRef ? false : !state.showItems });
  };

  const selectItem = (item: ItemsType) => {
    setState({
      ...state,
      selectedItem: item,
      showItems: false,
    });
  };

  const buyHandler = () => {
    if (Number(value) >= 1) {
      const trade = {
        currency: state.selectedItem.value,
        amount: Number(value),
        id: uuidv4(),
      };
      dispatch(addNewTrade(trade));
      setValue("");
      setError("");
      setState({ ...state, selectedItem: currencyList[0], showItems: false });
    } else {
      setError("Amount must be > 0");
    }
  };

  const onClose = () => {
    setClose(true);
    setTimeout(() => {
      dispatch(actions.setIsOpen());
      setClose(false);
    }, 900);
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={`trade__container ${close ? "close" : ""}`}>
      <div className="trade__content">
        <div className="trade__body">
          <div className="trade__header">
            <img
              src={cross}
              alt="cross"
              className="trade__cross"
              onClick={() => onClose()}
            />
          </div>

          <div className="trade__input">
            <Input
              name="amount"
              placeholder="amount"
              type="text"
              pattern="[0-9]*"
              value={value}
              error={error}
              onChangeHandler={onChangeHandler}
            />
            <Dropdown
              state={state}
              showDropdown={showDropdown}
              selectItem={selectItem}
            />
          </div>
          <div className="trade__button">
            <Button
              text="Buy"
              className="primary"
              onClick={buyHandler}
            ></Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Trade;
