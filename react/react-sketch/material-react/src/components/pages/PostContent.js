import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import BodyCard from 'components/BodyCard';
import ContentTemplate from "components/pages/ContentTemplate";

const cardContent = {
  avatarUrl: "https://joeschmoe.io/api/v1/random",
  imageUrl: "https://picsum.photos/150"
};

const PostContent = () => {
  const { id } = useParams();
  const [post, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setPosts(res.data)
      })
  }, []);

  return (
    <ContentTemplate>
      <Grid container spacing={2}>
        <Grid item xs={12} key={post.id}>
          <BodyCard {...{...post, ...cardContent}} />
        </Grid>
      </Grid>
    </ContentTemplate>
  )
}

export default PostContent