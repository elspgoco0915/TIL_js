// その1
// @see https://ja.react.dev/learn/typescript

import { createContext, useContext, useState } from 'react';

type Theme = "light" | "dark" | "system";
// コンテキストの作成
const ThemeContext = createContext<Theme>("system");
// コンテキストから値を取り出す
const useGetTheme = () => useContext(ThemeContext);

const ExampleForReactDev = () => {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    // コンテキストを使用するコンポーネントをproviderで囲む
    <ThemeContext.Provider value={theme}>
      <MyComponent />
    </ThemeContext.Provider>
  )
}

const MyComponent = () => {
  // コンテキストから値を取り出すuseContextを呼び出している
  const theme = useGetTheme();
  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  );
}

// その2
// TODO: なぜか効かないので要調査
// @see https://midorigame-jo.com/usecontext/

type User = {
  id: number;
  name: string;
};
// ユーザーデータを保持するコンテキストを作成
// const userContext = createContext<User|null>(null);
const userContext = createContext<User|null>(null);

const Child = () => {
  return (
    <GrandChild />
  );
}

const GrandChild = () => {
  const user = useContext(userContext);
  return <p>こんにちは！{user.name}さん</p>
}

const Parent = () => {
  const user: User = {
    id: 1,
    name: "taro"
  };
  return (
    <userContext.Provider value={user}>
      <Child />
    </userContext.Provider>
  )
}


const StudyUseContextForBeginner = () => {
  return (
    <>
      <h3>StudyUseContextForBeginner</h3>
      <ExampleForReactDev />
      <Parent />
    </>
  );
}


export default StudyUseContextForBeginner;