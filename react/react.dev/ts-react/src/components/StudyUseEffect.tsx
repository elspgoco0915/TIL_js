import React, { useState, useEffect } from "react";
import './styles/use-effect.css';
// import ButtonGroup from '@material-ui'

// @see https://qiita.com/seira/items/e62890f11e91f6b9653f
const EffectFunc = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    /* 第一引数には実行させたい副作用関数 */
    console.log(`${count}回クリックされました`);
  },
  // 第二引数には、依存する変数の配列、この配列に変更があれば副作用関数が動く
  // 空配列の場合は、初回レンダリングの時のみ副作用関数が実行される
  // ちなみに、第二引数を未設定の場合は、コンポーネントがレンダリングされるたびに副作用関数が実行される
  []
)

  return (
    <>
    <p>{`${count}回クリックされました`}</p>
    <button onClick={() => setCount(prev => prev + 1)}>ボタン</button>
    <button onClick={() => setCount(0)}>リセット</button>
    </>
  );
}

const StudyUseEffect = () => {
  return (
    <>
      <h3>useEffect</h3>
      <EffectFunc />
    </>
  );
}

// TODO: material-uiがyarnでインストールできないので調べる
// TODO: その後、次のコンポーネントを作成する

export default StudyUseEffect;