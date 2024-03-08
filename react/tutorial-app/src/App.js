import { Routes, Route, NavLink } from 'react-router-dom';
import QuickStart from './pages/quickstart';
import NotFound from './pages/notfound';
import TicTacToe from './pages/tic-tac-toe';

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
      <li>
        <NavLink to="/quickstart">
          QuickStart
        </NavLink>
      </li>
      <li>
        <NavLink to="/tic-tac-toe">
          Tic-Tac-Toe
        </NavLink>
      </li>
    </ul>
    <Routes>
      <Route path="/" />
      <Route path="/quickstart" element={<QuickStart />} />
      <Route path="/tic-tac-toe" element={<TicTacToe/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  );
}

export default App;