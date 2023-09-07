import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material";
// import { Theme, createStyles, makeStyles } from '@mui/material/styles';
import { styled } from "@mui/material/styles";
import { items as tileData } from "components/ItemData";


// const useStyles = makeStyles();

const StyledImageList = styled(ImageList)({
  width: 500,
  height: 700,
});
const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
}));

export const GridList = () => {
  return (
    <StyledRoot>
      <StyledImageList
        // cellHeight={200}
        className=""
      >
        <ImageListItem key="Subheader" cols={2} style={{}}>
          <ListSubheader component="div" color="primary">一覧</ListSubheader>
        </ImageListItem>
          {tileData.map((tile) => (
            <ImageListItem key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <ImageListItemBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
              />
            </ImageListItem>
          ))}
      </StyledImageList>
    </StyledRoot>
  );
}

/* MUI
- https://mui.com/material-ui/react-image-list/
- https://mui.com/material-ui/migration/v5-component-changes/
 */
export const SampleGridList = () => {
  // const classes = useStyles();
  return (
    <div className="">
      <ImageList sx={{width: 500, height: 450 }} cols={3} rowHeight={164}>
        {tileData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
