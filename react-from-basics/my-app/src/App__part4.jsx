// normal exportをimport
import { useEffect, useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

// default exportをimport
import SomeComponent from "./components/SomeComponent";

// コンポーネントファイルは.jsxにして区別
export const App = () => {
    console.log('rendering!');

    // stateの定義
    const [num, setNum] = useState(0);
    const onClickButton = () => {
        setNum(num + 1);
    };

    // useEffect
    useEffect(() => {
        // alert(num)
        console.log(`num is ${num}`);
    }, [num]);


    // css in js
    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px",
    };

    return (
        <>
            {console.log('test.')}
            <h1 style={contentPinkStyle}>こんにちは</h1>
            <ColoredMessage color="purple">メッセージ</ColoredMessage>
            <p>{num}</p>
            <button onClick={onClickButton}>ボタン</button>
            <button onClick={SomeComponent}>ボタン2</button>
        </>
    )
}