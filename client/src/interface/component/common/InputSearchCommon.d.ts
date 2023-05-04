interface IPropsInputSearchCommon {
  colorTextPassword?: 'black' | 'blue';
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  onSubmit?: (text : string) => void
}

interface IStateInputSearchCommon {
  keyword?: string
}
