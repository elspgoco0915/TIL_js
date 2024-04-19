import React from "react";

// インライン形式の構文
const NormalButton = ({ title }: { title: string }) => {
  return (
    <button>{title}</button>
  );
}
// フィールドが複数あると、見にくくなる
const InlinedButton = ({title, disabled}: {title: string, disabled: boolean}) => {
  return (
    <button disabled={disabled}>{title}</button>
  )
}
// そのため、interfaceを用いる
interface ButtonProps {
  title: string;
  disabled: boolean;
}
const UsedInterfaceButton = ({title, disabled}: ButtonProps) => {
  return (
    <button disabled={disabled}>{title}</button>
  )
}

const MyButton = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <NormalButton title="I'm a button" />
      <InlinedButton title="Inlined" disabled={true} />
      <UsedInterfaceButton title="uib" disabled={false} />
    </div>
  );
}

export default MyButton;