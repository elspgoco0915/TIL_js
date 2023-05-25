


let msg = "こんにちは、js";

/*
変数宣言のときの「べからず」
宣言できるが、推奨しないやり方

1.初期値のない宣言
let msg;

2.複数の宣言を列挙
let msg = 'hogehoge', msg2 = 'foobar'

3.var命令におる宣言
var msg = 'test';

4.let, var命令の省略
msg = 'hello!js!';
*/


console.log(msg);

/*記法名*/
// 変数名/関数名    = キャメルケース
// let number = 1;
// function countNumber{}

// 定数名           = 大文字のアンダースコア
// const USER_TYPE = 1;

// クラス名         = パスカル
// class jsonFormatter


/*-----
 配列
-----*/
// テンプレート文字列
// 複数行にまたがる文字列、文字列へ変数の埋め込みができる
let name = '鈴木';
let str = `こんにちは${name}さん。
今日はいい天気ですね。`

console.log(str);

// 配列
let data = ['js', 'python', 'php'];
console.log(data[0])

// 疎な配列
// 飛び番で要素が追加された場合、間の要素は空の配列になる
data[10] = 'java';
console.log(data);

let nestData = [
    ['a', 'b'],
    ['c', 'd'],
];
console.log(nestData[1][0]);

/*-----
 オブジェクト
 各要素に文字列キーでアクセス可能な配列
-----*/
let book = {
    title: '題名',
    author: '作者',
    price: 2980,
    publisher: '出版社',
};
console.log(book.title);
console.log(book['title']);





