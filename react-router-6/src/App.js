import logo from './logo.svg';
// import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NoMatch from './pages/nomatch';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact message="Hello Contact" />} />
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </div>
  );
}

export default App;
