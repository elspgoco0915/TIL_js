import React from 'react';
import MyButton from './components/MyButton';
import StudyUseState from './components/StudyUseState';
import StudyUseEffect from './components/StudyUseEffect';

const App = () => {
  return (
    <div className="App">
      <h2>TypeScript で React コンポーネントを書く方法</h2>
      <MyButton />
      <hr />
      <h2>hooks</h2>
      <StudyUseState />
      <StudyUseEffect />
    </div>
  );
}

export default App;
