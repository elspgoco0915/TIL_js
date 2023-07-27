function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      // ツリーの上側にあるタグにアタッチされたイベントハンドラが発火しないようにします
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}


function Signup() {
  return (
    <form onSubmit={e => {
      // イベントがブラウザデフォルトの動作を持っていた場合に、それを抑制します
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}


export default function Toolbar() {
  return (
    <>
    <Signup />
      <div className="Toolbar" onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
        <Button onClick={() => alert('Playing!')}>
          Play Movie
        </Button>
        <Button onClick={() => alert('Uploading!')}>
          Upload Image
        </Button>
      </div>
    </>
  );
}
