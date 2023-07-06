import { ColoredMessage } from "./components/ColoredMessage";

// コンポーネントファイルは.jsxにして区別
export const App = () => {

    const onClickButton = () => { alert(); };

    // const contentStyle = {
    //     color: "blue",
    //     fontSize: "20px",
    // };

    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px",
    };

    return (
        <>
            {console.log('test.')}
            <h1 style={contentPinkStyle}>こんにちは</h1>
            <ColoredMessage color="purple">メッセージ</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
        </>
    )
}