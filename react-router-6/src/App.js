import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NoMatch from './pages/nomatch';
import Posts from './pages/posts';
import Post from './pages/post';
import { Routes, Route, Link, NavLink, useResolvedPath, useMatch } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({
    path: resolved.pathname,
    end: true,
  });
  return (
    <div>
      <Link style={{ color: match ? 'blue' : '' }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

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
          <CustomLink to="/contact">Contact</CustomLink>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact message="Hello Contact" />} />
        <Route path="/posts" element={<Posts />}>
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </div>
  );
}

export default App;
