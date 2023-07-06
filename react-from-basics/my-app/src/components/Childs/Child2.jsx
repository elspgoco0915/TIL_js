import { memo } from "react";

const style = {
    height: "50px",
    backgroundColor: "lightgray"
};

export const Child2 = memo(() => {
    console.log("child2 レンダリング");
    return (
        <div style={style}>
            <p>Child2</p>
        </div>
    )
});