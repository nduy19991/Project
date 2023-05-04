import React, { useState } from "react";
import Styles from "./InputSearchCommon.module.css";
import { BiHide, BiShow } from 'react-icons/bi';

const InputSearchCommon: React.FC<IPropsInputSearchCommon> = (props) => {
  const {
    placeholder,
    className,
    defaultValue,
    onSubmit,
    label
  } = props;

  const defaultState: IStateInputSearchCommon = {
    keyword: defaultValue
  };
  const [state, setState] = useState(defaultState);
  const { keyword = '' } = state;
  return (
    <>
      <div className={Styles.input_group}>
        {label && <span className="input-group-text">{label}":"</span>}
        <input
          value={keyword}
          className={`form-control ${Styles.input_text}, ${className}`}
          placeholder={placeholder}
          onChange={(evt) => setState(prev => {
            return {
              ...prev,
              keyword: evt?.target?.value
            }
          })}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onSubmit && onSubmit(keyword)
            }
          }}
        />
      </div>
    </>
  );
};

export default InputSearchCommon;
