console.log('test');

/* ---------
関数の定義方法
--------- */
// 1.functionコンストラクタ
// new Function (args, ...., body)
// 文字列で引数や関数本体を設定できる(基本的に使わない！)
let getTriangleArea = new Function(
    'base',
    'height',
    'return base * height / 2',
);
console.log(getTriangleArea(1, 2));

// 2.関数リテラル
let sumNumbers = function (a, b) {
    return a + b;
};
console.log(sumNumbers(1, 2));

// 3.アロー関数
// 関数リテラルを簡略化した書き方
// (引数, ...) => { 関数の本体 }

let joinStrings = (a, b) => a + b;
console.log(joinStrings('あい', 'うえお'));

// 引数がひとつなら引数をくくるかっこも不要
let doubleNumber = a => a * 2;
console.log(doubleNumber(1));
// 引数がない場合は、かっこを省略できない
let showMessage = () => 'hello';
console.log(showMessage());

// スコープ
// swtichで変数を定義するときは先に定義する
// caseブロック内でletしないように！

const x = 1;
let value;
switch (x) {
    case 0:
        value = 'xは0';
        break;
    case 1:
        value = 'xは1';
        break;
    case 2:
        value = 'xは2';
        break;
}
console.log(value);

// 可変長引数の関数　スプレッド構文
function sumAll(...nums) {
    let result = 0;
    for (let num of nums) {
        result += num;
    }
    return result;
}
console.log(sumAll(1, 2, 3))

// 名前付き引数
function greeting({
    greet = 'こんにちは',
    name,
}) {
    return `${greet}。私の名前は${name}です。`;
}
// 引数のキーを指定するので順番を変えることができる
console.log(greeting({
    name: 'たろう',
    greet: 'おはよう',
}));


// 複数の戻り値を返す
function getMaxMin(...nums) {
    return [Math.max(...nums), Math.min(...nums)];
}
let [max, min] = getMaxMin(1, 10, 2, 3, 25, 5);
console.log(max, min);

