import { useState } from "react";

export const InvalidCounter = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        // イベントハンドラ内のすべてのコードが実行されるまで、React は state の更新処理を待機します
        // 再レンダーはこれらの setNumber() 呼び出しがすべて終わった後で行われます。
        // よって最後のsetNumberの実行結果が代入されるので＋１しか増えない
        setNumber(number+1);
        setNumber(number+1);
        setNumber(number+1);
      }}>
        +3?
      </button>
    </>
  )
}

export const ValidCounters = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        // 更新用関数
        // React はこの関数をキューに入れて、イベントハンドラ内の他のコードがすべて実行された後に処理されるようにします
        setNumber(n => n+1);
        setNumber(n => n+1);
        setNumber(n => n+1);
      }}>
        +3
      </button>

      <button onClick={() => {
        // 0 + 5 = 5
        setNumber(number + 5);
        // 5 + 1 = 6
        setNumber(n => n + 1);
      }}>
        Increase the number
      </button>

      <button onClick={() => {
        // 0 + 5 = 5
        setNumber(number + 5);
        // 5 + 1 = 6
        setNumber(n => n + 1);
        // number = 42
        setNumber(42);
      }}>
        Increase the number
      </button>
    </>
  )
}


// export default Counters;