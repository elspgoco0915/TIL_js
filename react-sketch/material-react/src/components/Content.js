import React, {useState, useEffect} from "react";
import axios from 'axios';
import Grid from '@mui/material/Grid';
import BodyCard from './BodyCard';

const Content = () => {

  const cardContent = {
    avatarUrl: "https://picsum.photos/50",
    imageUrl: "https://picsum.photos/150",
  };

  // APIレスポンス結果を格納する変数
  const [posts, setPosts] = useState([]);
  // ページを開いたときにaxiosでAPIへリクエストし、レスポンスを格納
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data)
      })
  }, []);


  // コンポーネントのpropsにcardContentsを展開する関数
  const getCardContent = getObj => {
    const bodyCardContent = {...getObj, ...cardContent}
     return (
       <Grid item xs={12} sm={4} key={getObj.id}>
         <BodyCard {...bodyCardContent} />
       </Grid>
     );
  };

  // cardContentsの数だけ出力する
  return (
    <Grid container spacing={2}>
      {posts.map(contentObj => getCardContent(contentObj))}
    </Grid>
  )
}

export default Content