//　加算演算子
console.log('Java' + 'Script');
console.log('10' + '1');
console.log(10 + 1);

let today = new Date();
console.log(12345 + today);

// インクリメント演算子
// 前置演算
let i = 3;
let j = ++i;
console.log(i);
console.log(j);

// 後置演算
let x = 3;
let y = x++;
console.log(x);
console.log(y);

// 小数点を含む演算
console.log(0.2 * 3); //0.6000000000000001
console.log(((0.2 * 10) * 3) / 10); // 0.6


/*---
代入演算子
----*/
// 分割代入
// 配列の場合
let array = [1, 2, 3, 4, 5];
let [x0, x1, x2] = array;
console.log(x0);
console.log(x1);
console.log(x2);

// 飛ばすことも可能
let [y0, , , y3] = array;
console.log(y0);
console.log(y3);

// のこりの要素をまとめて取得
let [z0, ...rests] = array;
console.log(rests);

// オブジェクトの場合
let book = {
    title: '題名',
    author: '作者',
    price: 2980,
    publisher: '出版社',
};

// プロパティが存在しない場合の規定値も設定可能
let { price, title, memo = 'メモ' } = book;
console.log(title);
console.log(price);
console.log(memo);

let book2 = {
    title: '題名2',
    author: '作者2',
    price: 1000,
    publisher: '出版社2',
    others: { keyword: 'detail', logo: 'logo.jpg' }
}

let { title2, others, others: { keyword } } = book2;
console.log(title2, others, keyword);
