import React, { useState } from "react";
import Styles from "./InputCommon.module.css";
import { BiHide, BiShow } from 'react-icons/bi';

const defaultState: IPropsInputCommon = {
  isShowPassword: false,
};

const InputCommon: React.FC<IPropsInputCommon> = (props) => {
  const {
    label,
    color,
    isInputPassword = true,
    type = "text",
    placeholder,
    className,
  } = props;
  const [state, setState] = useState<IPropsInputCommon>(defaultState);
  const { isShowPassword, colorTextPassword } = state;

  const handleShowPassword = () => {
    setState((prev) => {
      console.log(prev);
      return {
        ...prev,
        isShowPassword: !isShowPassword,
        colorTextPassword: prev.isShowPassword ? "black" : "blue",
      };
    });
  };
  return (
    <>
      <div className={Styles.input_group}>
        {label ?? <span className="input-group-text">{label}":"</span>}
        <input
          type={isInputPassword && !isShowPassword ? "password" : type}
          aria-label="First name"
          className={`form-control ${Styles.input_text}, ${className}`}
          style={{
            color: color,
          }}
          placeholder={placeholder}
        />
        {isInputPassword && (
          <span onClick={handleShowPassword} style={{ color: colorTextPassword}}>
          {isShowPassword ? <BiHide/> : <BiShow/>}
        </span>
        )}
      </div>
    </>
  );
};

export default InputCommon;
