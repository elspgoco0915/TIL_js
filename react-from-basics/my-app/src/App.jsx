import { useState } from "react";
import axios from "axios";
import { useFetchUsers } from "./hooks/useFetchUsers";

export const App = () => {
    // カスタムフック
    // 関数を実行し返却値を分割代入で受け取る
    // const { userList, onClickFetchUser } = useFetchUsers();
    const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();
    console.log(userList);
    // // const [userList, setUserList] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);

    // ユーザー取得ボタン押下アクション
    // const onClickFetchUser = () => {
    //     setIsLoading(true);
    //     setIsError(false);
    //     // API実行
    //     axios.get("https://example.com/users")
    //         .then(result => {
    //             const users = result.data.map(user => ({
    //                 id: user.id,
    //                 name: `${user.lastname} ${user.firstname}`,
    //                 age: user.age
    //             }));
    //             // ユーザー一覧stateを更新
    //             setUserList(users);
    //             // エラーの場合はフラグon
    //         }).catch(() => setIsError(true))
    //         // 処理完了後ローディングフラグoff
    //         .finally(() => setIsLoading(false));
    // };

    return (
        <div>
            <button onClick={onClickFetchUser}>ユーザー取得</button>
            {/* エラーの場合はエラーメッセージを表示 */}
            {isError && <p style={{ color: "red" }}>エラーが発生</p>}
            {/* ローディング中は表示を切り替える */}
            {isLoading ? (<p>データ取得中です</p>)
                : (userList.map(user =>
                (<p key={user.id}>
                    {`${user.id}: ${user.name} ${user.age}歳`}
                </p>
                ))
                )}
        </div>
    )
};