import { useState } from "react";
import axios from "axios";

// ユーザー一覧を取得するカスタムフック
export const useFetchUsers = () => {
    const [userList, setUserList] = useState([{
        id: 1,
        name: 'taro',
        age: 30
    }]);
    // const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // const onClickFetchUser = () => alert('jikkou');
    const onClickFetchUser = () => {
        setIsLoading(true);
        setIsError(false);
        // API実行
        // TODO: json-serverを用いてaxiosできるようにする
        axios.get("https://example.com/users")
            .then(result => {
                const users = result.data.map(user => ({
                    id: user.id,
                    name: `${user.lastname} ${user.firstname}`,
                    age: user.age
                }));
                // ユーザー一覧stateを更新
                setUserList(users);
                // エラーの場合はフラグon
            }).catch(() => setIsError(true))
            // 処理完了後ローディングフラグoff
            .finally(() => setIsLoading(false));
    };

    // return { userList, onClickFetchUser };
    return { userList, isLoading, isError, onClickFetchUser };
};