import React from "react";
import Grid from '@mui/material/Grid';
import BodyCard from './BodyCard';

const cardContents = [
  {
    title: "タイトル",
    subheader: "ヘッダー",
    avatarUrl: "https://picsum.photos/50",
    imageUrl: "https://picsum.photos/150",
    text: "本文本文本文本文本文本文本文本文",
  },
  {
    title: "タイトル2",
    subheader: "サブヘッダー2",
    avatarUrl: "https://picsum.photos/50",
    imageUrl: "https://picsum.photos/150",
    text: "testtesttesttesttesttesttesttest",
  },
  {
    title: "タイトル3",
    subheader: "サブヘッダー3",
    avatarUrl: "https://picsum.photos/50",
    imageUrl: "https://picsum.photos/150",
    text: "title3title3title3title3title3",
  },
  {
    title: "タイトル4",
    subheader: "サブヘッダー4",
    avatarUrl: "https://picsum.photos/50",
    imageUrl: "https://picsum.photos/150",
    text: "12345123451234512345123451234512345",
  },
];

const Content = () => {

  // コンポーネントのpropsにcardContentsを展開する関数
  const getCardContent = getObj => {
     return (
       <Grid item xs={12} sm={4}>
         <BodyCard {...getObj} />
       </Grid>
     );
  };

  // cardContentsの数だけ出力する
  return (
    <Grid container spacing={2}>
      {cardContents.map(contentObj => getCardContent(contentObj))}
    </Grid>
  )
}



// function Content() {
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={4}>
//         <BodyCard
//           title="タイトル"
//           subheader="ヘッダー"
//           avatarUrl="https://picsum.photos/50"
//           imageUrl="https://picsum.photos/150"
//           text="本文本文本文本文本文本文本文本文"
//         />
//       </Grid>
//       <Grid item xs={12} sm={4}>
//         <BodyCard />
//       </Grid>
//       <Grid item xs={12} sm={4}>
//         <BodyCard />
//       </Grid>
//     </Grid>
//   )
// }

export default Content