const Buttons = () => {
  // イベントハンドラ
  // コンポーネントの内部で定義し{handleXXXX}のような名前にする
  const handleClick = () => {
    alert('you clicked.');
  }

  return (
    <>
      <button onClick={handleClick}>
        Click me
      </button>
      {/* 同義
        レンダーの中で実行させないため、イベントハンドラで書く 
      */}
      <button onClick={() => {
        alert('you clicked 2.');
      }}>
        Click me
      </button>
    </>
  
  )
};

const AlertButton = ({ message, children }) => {
  return (
    <button onClick={() => { alert(message) }}>
      {children}
    </button>
  );
}

const HandlerButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

const PlayButton = ({ movieName }) => {
  // イベントハンドラをpropsとして渡す
  // ボタン押下時の実行内容を変更できる
  const handlePlayClick = () => {
    alert(`playing ${movieName}`);
  }
  return (
    <HandlerButton onClick={handlePlayClick}>
      Play "{movieName}"
    </HandlerButton>
  )
}

const UploadButton = () => {
  return (
    <HandlerButton onClick={() => alert('uploading!')}>
      upload image
    </HandlerButton>
  );
}

const ToolBar = () => {
  return (
    <>
      <AlertButton message="playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
      <hr />
      <PlayButton movieName="kiki's"/>
      <UploadButton />
      <SmashButton />
    </>  
  );
}

// イベントハンドラの props の命名 
// イベントハンドラは"onXXXXX"で任意で命名できる
const OriginalPropsButton = ({ onSmash, children }) => {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

const SmashButton = ({}) => {
  return (
    <OriginalPropsButton onSmash={() => { alert('smash'); }}>
      Smash!
    </OriginalPropsButton>
  );
}


const ToolBar2 = ({onPlayMovie, onUploadImage}) => {
  return (
    <div>
      <HandlerButton onClick={onPlayMovie}>
        play movie
      </HandlerButton>
      <HandlerButton onClick={onUploadImage}>
        upload image
      </HandlerButton>
    </div>
  );
}

// イベント伝搬
// event-propagation
const EventToolBar = () => {
  return (
    <>
    <h2>伝搬してしまうパターン</h2>
    <div 
      onClick={() => {alert('clicked div.')}}
      style={ {width: '500px', backgroundColor: 'gray' }}
    >
      {/* 各ボタンを押すと、親のdivのクリックも実行されてしまう */}
      <HandlerButton onClick={() => {alert('play')}}>
        play movie
      </HandlerButton>
      <HandlerButton onClick={() => {alert('upload')}}>
        upload image
      </HandlerButton>
    </div>

    <h2>伝搬を停止させる</h2>
    <div 
      onClick={() => {alert('clicked div.')}}
      style={ {width: '500px', backgroundColor: 'gray' }}
    >
      {/* 各ボタンを押すと、親のdivのクリックも実行されてしまう */}
      <StopPropagationButton onClick={() => {alert('play')}}>
        play movie
      </StopPropagationButton>
      <StopPropagationButton onClick={() => {alert('upload')}}>
        upload image
      </StopPropagationButton>
    </div>
    </>
  );
}

// 伝搬させないボタン
const StopPropagationButton = ({ onClick, children}) => {
  return (
    <button onClick={e => {
        e.stopPropagation();
        onClick();
      }}>
      {children}
    </button>
  );
}

// デフォルト動作を防ぐ 
const Signup = () => {
  return (
    // formのsubmitはクリックされるとページ全体がリロードされるので停止させる
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!')
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}



const App = () => {
  return (
    <>
    <Buttons />
    <ToolBar />
    <hr />
    <ToolBar2 
      onPlayMovie={ () => {alert('onPlayMovie')} }
      onUploadImage={ () => {alert('onUploadImage')}}  
    />
    <hr />
    <EventToolBar />
    <hr />
    <Signup />
    </>
  )
}

export default App;