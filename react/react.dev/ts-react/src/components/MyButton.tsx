import React from "react";

const Button = ({ title }: { title: string }) => {
  return (
    <button>{title}</button>
  );
}

const MyButton = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Button title="I'm a button" />
    </div>
  );
}

export default MyButton;