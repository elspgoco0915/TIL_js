export const ColoredMessage = (props) => {
    console.log(props);
    // 分割代入
    const { color, children } = props;

    const contentStyle = {
        // 分割代入により、color: color, をオブジェクト省略記法でかける
        color,
        fontSize: "20px",
    };
    return <p style={contentStyle}>
        {children}
    </p>
};