import { FC, useRef } from "react";

import { iDropdown, ItemsType } from "../Trade/Trade";
import useOutsideClick from "../../hooks/useOutsideClick";

import "./dropdown.scss";

interface iDropdownProps {
  state: iDropdown;
  showDropdown: (isRef: boolean) => void;
  selectItem: (item: ItemsType) => void;
}

const Dropdown: FC<iDropdownProps> = ({ state, showDropdown, selectItem }) => {
  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, () => {
    showDropdown(true);
  });

  return (
    <div className="dropdown_box">
      <div className="dropdown_container" ref={dropdownRef}>
        <div className="dropdown_selected_item">{state.selectedItem.value}</div>
        <div className="dropdown_arrow" onClick={() => showDropdown(false)}>
          <span
            className={`${
              state.showItems ? "dropdown_arrow_up" : "dropdown_arrow_down"
            }`}
          />
        </div>

        <div
          style={{ display: state.showItems ? "block" : "none" }}
          className="dropdown_items"
        >
          {state.items.map((item) => (
            <div
              key={item.id}
              onClick={() => selectItem(item)}
              className={state.selectedItem === item ? "selected" : ""}
            >
              {item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
