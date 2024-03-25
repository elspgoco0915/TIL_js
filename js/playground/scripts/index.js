/*
thisは読み取り専用のグローバル変数のようなもの
thisの参照先は条件によって変化する
参考にさせていただいたリンク
- https://zenn.dev/geen1/articles/186631c713e6d8
- https://qiita.com/mejileben/items/69e5facdb60781927929
*/

// メソッド呼び出し、関数呼び出しでの違い
this.value = 1;
const myObject = {
  value: 10,
  // メソッド呼び出し
  show: function() {
    const self = this;
    console.log(this.value); // this = myObjectを指す = 10
    // 関数呼び出しパターン
    function show () {
      console.log(this.value); // this = 関数ではグローバルオブジェクトを指す = 1
      console.log(self.value); // self = オブジェクトのメソッド内のthis = myObjectを指す = 10
    }
    show(); // 上記の関数show()を実行する
  }
}
myObject.show(); 


// コンストラクタ呼び出し、apply,call呼び出しパターン
function MyObject2(value) {
  this.value = value;
  this.increment = function () {
    this.value++;
  }
}
// インスタンス生成時にthis.valueにセットする
const myObject2 = new MyObject2(3);
console.log(myObject2.value); // 3
myObject2.increment();
console.log(myObject2.value); // 4

// インスタンスを生成せず呼び出すと、thisはグローバルオブジェクトを指してしまう
MyObject2(100);
console.log(this.value); // よって、グローバル変数のvalue = 100 となる

// TODO: apply, Call呼び出しパターン

/**
 * 通常関数とアロー関数の違い
 */
this.message = 'グローバルオブジェクトのmessage';
// 通常関数
function setMessage() {
  console.log(this.message);
}
// アロー関数
const setMessageForArrow = () => {
  console.log(this.message);
}
// 通常関数で呼び出すと
const obj = {
  message: 'hello, obj',
  func: setMessage, // thisはobjを指すので、'hello, obj'となる
  arrowfunc: setMessageForArrow
}
const obj2 = {
  message: 'hello, obj2',
  func: setMessageForArrow, // thisはグローバルオブジェクトを指すので、'グローバルオブジェクトのmessage'となる
}

// 通常関数では、this = obj となり、'hello, obj'
obj.func();
// アロー関数では、関数が宣言された時点でthisの受け取る値が確定（＝グローバルオブジェクトの変数を指す）
obj2.func();