import React, { useState, useEffect } from "react";
import './styles/use-effect.css';
// import ButtonGroup from '@material-ui'

// @see https://qiita.com/seira/items/e62890f11e91f6b9653f
const EffectFunc = () => {
  const [count, setCount] = useState<number>(0);
  type Names = {
    lastName: string;
    firstName: string;
  };
  const [name, setName] = useState<Names>({
    lastName: '',
    firstName: ''
  });
  useEffect(() => {
    /* 第一引数には実行させたい副作用関数 */
    console.log('useEffectの副作用関数が実行されました');
    },
    // 第二引数には、依存する変数の配列、この配列に変更があれば副作用関数が動く
    // 空配列の場合は、初回レンダリングの時のみ副作用関数が実行される
    // ちなみに、第二引数を未設定の場合は、コンポーネントがレンダリングされるたびに副作用関数が実行される
    []
  );

  // countが更新された場合のみ、副作用関数が実行される
  useEffect(() => {
    document.title = `${count}回クリックされました`;
    console.log(`再レンダリングされました`);
  }, [count]);




  return (
    <>
      <p>{`${count}回クリックされました`}</p>
      <button onClick={() => setCount(prev => prev + 1)}>ボタン</button>
      <button onClick={() => setCount(0)}>リセット</button>
      <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
      <form action="">
        <input 
          type="text" 
          placeholder="姓" 
          value={name.lastName} 
          onChange={e => {setName({...name, lastName: e.target.value})}} 
        />
        <input 
          type="text" 
          placeholder="名" 
          value={name.firstName} 
          onChange={e => {setName({...name, firstName: e.target.value })}} 
        />
      </form>
    </>
  );
}

// クリーンアップ関数を使った場合
// @see: https://qiita.com/TaikiTkwkbysh/items/4fc32a3268d958ba218f
const UPDATE_CYCLE: number = 1000;
const KEY_LOCALE: "KEY_LOCALE" = "KEY_LOCALE";

const Clock = () => {
  const [timestamps, setTimestamps] = useState<Date>(new Date());
  const locale = "ja-JP";
  let counter: number = 0;

  useEffect(() => {
    const timer = setInterval(() => { 
      setTimestamps(new Date());
      counter++;
      console.log("セットインターバル作動中" + counter);
    }, UPDATE_CYCLE);

    // クリーンアップ関数
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>{timestamps.toLocaleString(locale)}</span>
      </p>
    </div>
  );
}

const StudyUseEffect = () => {
  return (
    <>
      <h3>useEffect</h3>
      <EffectFunc />
      <Clock />
    </>
  );
}

export default StudyUseEffect;