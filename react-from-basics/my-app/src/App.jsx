// コンポーネントファイルは.jsxにして区別
export const App = () => {

    const onClickButton = () => { alert(); };

    const contentStyle = {
        color: "blue",
        fontSize: "20px",
    };

    return (
        <>
            {console.log('test.')}
            <h1 style={contentStyle}>こんにちは</h1>
            <p>お元気ですよ</p>
            <button onClick={onClickButton}>ボタン</button>
        </>
    )
}