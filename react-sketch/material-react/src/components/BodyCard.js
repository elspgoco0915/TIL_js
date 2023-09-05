import React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Card, CardHeader, CardMedia, CardActions, CardContent, Button, IconButton, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const BodyCard = (props) => {
  const { userId, id, title, body, avatarUrl, imageUrl } = props;

  // styledComponents
  const StyledBull = styled('span')({
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  });
  const bull = <StyledBull>・</StyledBull>;
  const TitleTypography = styled(Typography)({
    fontSize: 14,
  });
  const PositionedTypography = styled(Typography)({
    marginBottom: 14,
  });

  // cardの高さを統一する
  const StyledCardHeader = styled(CardHeader)({
    height: '50px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    "& .MuiCardHeader-content": {
      overflow: 'hidden'
    },
  });
  const StyledCardContent = styled(CardContent)({
    height: '200px',
    overflow: 'hidden'
  });


  // ReturnedComponents
  return (
    <Card variant="outlined">
      <StyledCardHeader
        avatar={
          <Avatar src={avatarUrl} />
        }
        action={
          <IconButton>
            <StarIcon />
          </IconButton>
        }
        title={title}
      />

      <CardMedia style={{ height: "150px" }} image={imageUrl} />

      <StyledCardContent>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
        <TitleTypography color="textSecondary" gutterBottom>
          Word of the Day
        </TitleTypography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o
        </Typography>
        <PositionedTypography color="textSecondary">
          adjective
        </PositionedTypography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </StyledCardContent>
      <CardActions>
        <Button size="small">詳細を見る</Button>
      </CardActions>
    </Card>
  );
};

export default BodyCard;