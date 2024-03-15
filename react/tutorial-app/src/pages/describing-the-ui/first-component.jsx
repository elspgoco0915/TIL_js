import Gallery from "../../components/describing-the-ui/Gallery";
import { Profile } from "../../components/describing-the-ui/Profile";
import Todos from "../../components/describing-the-ui/javascript-in-jsx-with-curly-braces/TodoList";
import TodoList from "../../components/describing-the-ui/Todos";
import Avatar from "../../components/describing-the-ui/javascript-in-jsx-with-curly-braces/Avatar";

const MyProfile = () => {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  );
}

const FirstComponent = () => {
  return (
    <>
      <h1>Your-First-Component</h1>
      <MyProfile />
      <MyProfile />
      <MyProfile />
    </>
  );
}

const ImportingAndExportingComponent = () => {
  return(
    <>
    <h1>ImportingAndExportingComponent</h1>
    <p>GalleryコンポーネントをGallery.jsxからデフォルトインポート</p>
      <Gallery />
    <p>ProfileコンポーネントをGallery.jsxからProfileという名前付きでインポート</p>
      <Profile />
    </>
  );
}

const WritingMarkupWithJsx = () => {
  return (
    <>
    <h1>WritingMarkupWithJsx</h1>
    <TodoList />
    </>
  );
}

const JsxWithCurlyBraces = () => {
  return (
    <>
    <h1>JsxWithCurlyBraces</h1>
    <Todos />
    </>
  )
}


const App = () => {
  return (
    <>
      <FirstComponent />
      <hr />
      <ImportingAndExportingComponent />
      <hr />
      <WritingMarkupWithJsx />
      <hr />
      <JsxWithCurlyBraces />
    </>
  );
}

export default App;