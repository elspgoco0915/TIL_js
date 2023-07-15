import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";
// ユーザ情報の型定義
import type { User } from "./types/user"

export const App = () => {
  // 取得したユーザー情報
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState<User[]>([]);

  // const jsonUrl: string = "https://example.com/users";
  // NOTE: npm run json-serverで事前にサーバ立ち上げておく
  const url: string = "http://localhost:3000/members";

  // 画面表示時にユーザ情報取得
  useEffect(() => {
    axios.get<User[]>(url).then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      {users.map(user => (
        <ListItem id={user.id} name={user.name} age={user.age}
          personalColor={user.personalColor}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
};