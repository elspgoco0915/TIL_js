
import './App.css';
import Grid from '@mui/material/Grid';
import Header from './components/Header';
import Content from "./components/Content";
import About from "./components/About";
import PostContent from "./components/PostContent";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid sm={2} />
            <Grid xs={12} sm={8}>
              <BrowserRouter>
                <Routes>
                  <Route exact path="/" element={<Content />}/>
                  <Route exact path="/about" element={<About />}/>
                  <Route exact path="/post/:id" element={<PostContent />}/>
                </Routes>
              </BrowserRouter>
          </Grid>
          <Grid sm={2} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
