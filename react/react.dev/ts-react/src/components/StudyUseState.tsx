import React, { useState } from "react";
import './styles/use-state.css';

// @see: https://qiita.com/seira/items/f063e262b1d57d7e78b4
const Counter = () => {
  const initialState = Math.floor(Math.random() * 10) + 1;
  const [count, setCount] = useState<number>(initialState);
  const [open, setOpen] = useState<boolean>(false)
  // ユニオン型の場合
  type Status = "未押下" | "押下済";
  const [status, setStatus] = useState<Status>("未押下");

  // オブジェクト型の場合
  type RequestState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success', data: string }
  | { status: 'error', error: Error };
const [requestState, setRequestState] = useState<RequestState>({ status: 'idle' });

  const toggle = () => {
    setOpen(!open)
    setStatus("押下済");
    setRequestState({ status: 'success', data: 'hogehoge' })
  };

  return (
    <>
      <p>リクエスト状態：{requestState.status}</p>
      <p>トグルボタンの状態：{status}</p>
      <button onClick={toggle}>{open ? '閉じる' : '開く'}</button>
      <div className={open ? 'isOpen': 'isClose'}>
        <p>現在の数字は{count}です</p>
        <button onClick={() => setCount(initialState)}>初期値に戻す</button>
        <button onClick={() => setCount(0)}>0</button>
        {/* 更新用関数で書く */}
        <button onClick={() => setCount(prevCount => prevCount + 1)}> + 1</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}> - 1</button>
      </div>
    </>
  );
}




const StudyUseState = () => {
  return (
    <>
      <h3>useState</h3>
      <Counter />
    </>
  );
}

export default StudyUseState;