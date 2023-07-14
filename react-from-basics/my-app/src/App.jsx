import { useState } from "react";
import { Card } from "./components/NameEdits/Card";
// import { Card } from

export const App = () => {
    // 管理者フラグ
    const [isAdmin, setIsAdmin] = useState(false);

    // [切り替え]押下時
    const onClickSwith = () => setIsAdmin(!isAdmin);

    return (
        <div>
            {isAdmin
                ? <span>管理者です</span>
                : <span>管理者以外です</span>
            }
            <button onClick={onClickSwith}>
                切り替え
            </button>

            <Card isAdmin={isAdmin} />

        </div>
    )

};