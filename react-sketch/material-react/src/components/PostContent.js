import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import BodyCard from './BodyCard';

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
    <Grid container spacing={2}>
      <Grid item xs={12} key={post.id}>
        <BodyCard {...{...post, ...cardContent}} />
      </Grid>
    </Grid>
  )
}

export default PostContent