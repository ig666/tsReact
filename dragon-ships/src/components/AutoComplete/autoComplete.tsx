import React, { useState } from "react";
import Input, { InputProps } from "../Input/input";

export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  onSelect?: (value: string) => void;
  filterChange: (value: string) => string[];
}

export const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const [value, setvalue] = useState("");
  const [option, setOption] = useState<string[]>([]);
  const { onSelect, filterChange, ...resetProps } = props;
  const handChange = (value: string) => {
    setvalue(value);
    if (value) {
      let strArr = filterChange(value);
      setOption(strArr);
    } else {
      setOption([]);
    }
  };
  const handRender = () => {
    return (
      <ul>
        {option.map((item, index) => (
          <li
            onClick={() => {
              handSelect(item);
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };
  const handSelect = (item: string) => {
    setvalue(item);
    setOption([]);
    if (onSelect) {
      onSelect(item);
    }
  };
  return (
    <div className="viking-suggestion">
      <Input
        {...resetProps}
        value={value}
        onChange={(e) => {
          handChange(e.target.value);
        }}
      ></Input>
      {option && handRender()}
    </div>
  );
};
