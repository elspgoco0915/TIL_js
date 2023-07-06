import { memo } from "react";
const style = {
    height: "200px",
    backgroundColor: "wheat",
    padding: "8px"
};

export const Child4 = memo(() => {
    console.log("child4 レンダリング");
    return (
        <div style={style}>
            <p>Child4</p>
        </div>
    )
});