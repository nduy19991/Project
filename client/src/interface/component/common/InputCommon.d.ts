interface IPropsInputCommon {
  label?: string;
  color?: string;
  isInputPassword?: boolean;
  type?: "text" | "password" | "date" | "color" | string;
  className?: string;
  placeholder?: string;
  value?: any;
  onChange?: any;
  name?: string;
}

interface IPropsInputCommon {
  isShowPassword?: boolean;
  colorTextPassword?: "red" | "blue";
}
