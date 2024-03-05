import { Routes, Route, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <>
      <h1>tutorial-app</h1>
      <p>react.dev</p>
      <a href="https://ja.react.dev/learn">https://ja.react.dev/learn</a>
      <Router />
    </>
  );
}

const Router = () => {
  return (
  <>
    <h2>Router</h2>
    <ul>
      <li>
        <NavLink to="/">
          Home
        </NavLink>
      </li>
    </ul>
  </>
  );
}

export default App;