// SSR版
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import styles from "./index.module.css"

// GetServerSidePropsから渡されるpropsの型
type Props = {
    initialImageUrl: string;
};

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
    const [imageUrl, setImageUrl] = useState(initialImageUrl);
    const [loading, setLoading] = useState(true);

    // ボタンをクリックしたときに画像を読み込む処理
    const handleClick = async () => {
        setLoading(true);
        const newImage = await fetchImage();
        setImageUrl(newImage.url);
        setLoading(false);
    }
    return (
        <div className={styles.page}>
            <button
                onClick={handleClick}
                style={{
                    backgroundColor: "#319795",
                    border: "none",
                    borderRadius: "4px",
                    color: "white",
                    padding: "4px 8px",
                }}
            >
                きょうのにゃんこ🐱
            </button>
            {/* // ローディング中でなければ、画像を表示する */}
            <div className={styles.frame}>
                {loading || <img src={imageUrl} />}
            </div>
        </div>
    );
};
export default IndexPage;

// サーバサイドで実行する処理
export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const image = await fetchImage();
    return {
        props: {
            initialImageUrl: image.url,
        }
    }
}


type Image = {
    url: string;
};
const fetchImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    console.log(images);
    return images[0];
};
// fetchImage().then((image) => {
//     console.log(image.alt); // 存在しないプロパティを参照している
// });