import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NoMatch from './pages/nomatch';
import Posts from './pages/posts';
import Post from './pages/post';
import PostIndex from './pages/postindex';
import { Routes, Route, Link, NavLink, useResolvedPath, useMatch, Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      {children}
    </div>
  )
};

const NestedLayout = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'end'}}>
      <Outlet />
    </div>
  )
}

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
          <CustomLink 
            to={{
              pathname: '/contact',
              search: '?api_key=abc123',
              state: 'test',
            }}
          >
            Contact
          </CustomLink>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
      <Routes>
        {/* Layoutの書き方 */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        {/* Layoutの書き方2 */}
        <Route path="/about" element={<About />} />
        <Route element={<NestedLayout />}>
          <Route path="/contact" element={<Contact message="Hello Contact" />} />
        </Route>
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostIndex />} />
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </div>
  );
}

export default App;
