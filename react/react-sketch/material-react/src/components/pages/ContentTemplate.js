import Grid from '@mui/material/Grid';
import Header from "../Header";

const ContentTemplate = (props) => {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            { props.children }
          </Grid>
          <Grid sm={2} />
        </Grid>
      </Grid>
    </>
  );
};

export default ContentTemplate;