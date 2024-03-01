import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NoMatch from './pages/nomatch';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <ul>
        <li>
          {/* styleでの当て方 */}
          <NavLink 
            style={({ isActive }) => (isActive ? { color: 'red' } : undefined)} 
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          {/* classNameでの当て方 */}
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)} 
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
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
