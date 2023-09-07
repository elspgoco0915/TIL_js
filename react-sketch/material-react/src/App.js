
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// pages
import Content from "components/pages/Content";
import PostContent from "components/pages/PostContent";
import Sketch from "components/pages/Sketch";
import Album from "components/pages/samples/Album";
import Pricing from "components/pages/samples/Pricing";
import SignIn from "components/pages/samples/SignIn";
import SignInSide from "components/pages/samples/SignInSide";
import SignUp from "components/pages/samples/SignUp";
import StickyFooter from "components/pages/samples/StickyFooter";
import GridPage from "components/pages/GridPage";

// 相対パスも利く
import Index from "./components/pages/samples/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Content />}/>
          <Route exact path="/post/:id" element={<PostContent />}/>

          <Route exact path="/grid" element={<GridPage />}/>

          <Route exact path="/sketch" element={<Sketch />}/>

          {/* MUI samples TODO: react-router-domの使い方を詳しく調べてリファクタリングする */}
          {/* TODO: not foundページの条件分岐作り方 */}
          {/*
          TODO: 写経しながらつくりを理解する


          */}
          <Route exact path="/samples" element={<Index />}/>
          <Route exact path="/samples/album" element={<Album />}/>
          <Route exact path="/samples/pricing" element={<Pricing />}/>
          <Route exact path="/samples/sign-in" element={<SignIn />}/>
          <Route exact path="/samples/sign-in-side" element={<SignInSide />}/>
          <Route exact path="/samples/sign-up" element={<SignUp />}/>
          <Route exact path="/samples/sticky-footer" element={<StickyFooter />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
