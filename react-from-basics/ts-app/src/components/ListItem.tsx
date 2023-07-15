import type { FC } from "react";
import type { User } from "../types/user";

// export const ListItem = (props: User) => {
// コンポーネントの型定義
export const ListItem: FC<User> = props => {
  const { id, name, age, personalColor } = props;
  return (
    <p style={{ color: personalColor }}>
      {id}: {name} ({age})
    </p>
  );
};

// 省略可能な型定義
ListItem.defaultProps = {
  personalColor: "grey"
}