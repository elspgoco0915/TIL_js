import Form from '../../components/state-a-components-memory/Form';
import Gallery from '../../components/state-a-components-memory/Gallery';


const App = () => {
  return (
    <>
      <h1>state-a-components-memory</h1>
      <h2>Gallery</h2>
      <p>同じコンポーネントを２回レンダーしても、それぞれ独立したstateを持つ（ローカル）</p>
      <hr />
      <Gallery />
      <hr />
      <Gallery />
      <h2>チャレンジ問題</h2>
      <Form />
    </>
  );
}

export default App;