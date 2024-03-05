import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px",
};

export const EditButton = props => {
    const { isAdmin } = props;

    const contextValue = useContext(AdminFlagContext);
    console.log(contextValue);

    return (
        // isAdminがfalse(=管理者でない)場合、ボタンを非活性にする
        <button style={style} disabled={!isAdmin}>
            編集
        </button>
    );
};