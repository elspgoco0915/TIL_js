/**
 * part6 再レンダリングの仕組みと最適化
 * 再レンダリングの条件
 * ・Stateが更新されたコンポーネント
 * ・Propsが変更されたコンポーネント
 * ・再レンダリングされたコンポーネント配下のコンポーネントすべて
 *
 * メモ化
 *  前回の処理結果を保持しておくこと
 */


import { useState, memo } from "react";
import { Child1 } from "./components/Childs/Child1";
import { Child4 } from "./components/Childs/Child4";

// コンポーネントのメモ化
export const App = memo(() => {
    console.log("Appレンダリング");

    const onClickReset = () => {
        setNum(0);
    };

    const [num, setNum] = useState(0);
    const onClickButton = () => {
        setNum(num + 1);
    };

    return (
        <>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <Child1 onClickReset={onClickReset} />
            <Child4 />
        </>
    );
});