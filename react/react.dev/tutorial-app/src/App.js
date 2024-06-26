import { Routes, Route, NavLink } from 'react-router-dom';
import QuickStart from './pages/quickstart';
import NotFound from './pages/notfound';
import TicTacToe from './pages/tic-tac-toe';
import Thinking from './pages/thinking';
import DescribingTheUi from './pages/describing-the-ui/App';
import AddingInteractivity from './pages/adding-interactivity/App';
import StateAComponentsMemory from './pages/state-a-components-memory/App';
import StateAsASnapshot from './pages/state-as-a-snapshot/App';
import UpdatingObjectsInState from './pages/updating-objects-in-state/App';
import UpdatingArraysInState from './pages/updating-arrays-in-state/App';

const App = () => {
  return (
    <>
      <h1>tutorial-app</h1>
      <p>react.dev</p>
      <a href="https://ja.react.dev/learn">https://ja.react.dev/learn</a>
      <hr />
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
      <li>
        <NavLink to="/thinking">
          Thinking in React
        </NavLink>
      </li>
      <li>
        <NavLink to="/describing-the-ui">
          describing-the-ui
        </NavLink>
      </li>
      <li>
        <NavLink to="/adding-interactivity">
          adding-interactivity
        </NavLink>
      </li>
      <li>
        <NavLink to="/state-a-components-memory">
          state-a-components-memory
        </NavLink>
      </li>
      <li>
        <NavLink to="/state-as-a-snapshot">
        state-as-a-snapshot & queueing-a-series-of-state-updates
        </NavLink>
      </li>
      <li>
        <NavLink to="/updating-objects-in-state">
        updating-objects-in-state
        </NavLink>
      </li>
      <li>
        <NavLink to="/updating-arrays-in-state">
        updating-arrays-in-state
        </NavLink>
      </li>
    </ul>
    <hr />
    <Routes>
      <Route path="/" />
      <Route path="/quickstart" element={<QuickStart />} />
      <Route path="/tic-tac-toe" element={<TicTacToe/>} />
      <Route path="/thinking" element={<Thinking/>} />
      <Route path="/describing-the-ui" element={<DescribingTheUi/>} />
      <Route path="/adding-interactivity" element={<AddingInteractivity/>} />
      <Route path="/state-a-components-memory" element={<StateAComponentsMemory/>} />
      <Route path="/state-as-a-snapshot" element={<StateAsASnapshot/>} />
      <Route path="/updating-objects-in-state" element={<UpdatingObjectsInState/>} />
      <Route path="/updating-arrays-in-state" element={<UpdatingArraysInState/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  );
}

export default App;