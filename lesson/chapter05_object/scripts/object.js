// オブジェクト
// 構造は連想配列(ハッシュ)と同じ

// 連想配列は、複数要素の集合体
let data = { x0001: 'yamada', x0002: 'sato', z0009: 'murata', u1005: 'kobayashi' };
// オブジェクトは1つのものを表現するのに、複数の属性情報をもつ
let member = { name: 'yamada', sex: 'man', birth: '1970/06/25', address: '千葉県' };

console.log(data, member);



// オブジェクトは
// 属性、状態を表すプロパティ
// オブジェクトを操作するメソッドで構成される
let form = {
    // プロパティ
    inputs: [],
    url: 'https://www.xxx.co.jp',
    address: '千葉県',
    // メソッド
    postData: function () {
        return 'posted.';
    }
};

// 呼び出し方
console.log(form);
console.log(form.url);
console.log(form.postData());

// nullオブジェクトの場合
let blankObject = null;
// Uncaught TypeError: Cannot read properties of null(reading 'length')
// console.log(blankObject.length);
console.log(blankObject?.length); // オプショナルチェーン演算子 で null を返せる


// dateオブジェクト
let d = new Date();
console.log(d);
let d2 = new Date(2023, 1, 1, 11, 11, 11, 0); // 指定も可能
console.log(d2);
let d3 = new Date('2022/1/1 10:30:00'); // 指定も可能
console.log(d3);

/*---------
mapオブジェクト
----------*/

let dataMap = new Map([
    ['x001', 'yamada'],
    ['x002', 'satop'],
]);
console.log(dataMap); // Map(2) {'x001' => 'yamada', 'x002' => 'satop'}

// mapの設定
dataMap.set('x003', 'sasaki');
console.log(dataMap); // Map(3) {'x001' => 'yamada', 'x002' => 'satop', 'x003' => 'sasaki'}

// mapの取得
console.log(dataMap.get('x001')); // yamada
// mapの判定
console.log(dataMap.has('x004')); // false
// mapの削除
dataMap.delete('x002');
console.log(dataMap); // Map(2) {'x001' => 'yamada', 'x003' => 'sasaki'}

// すべてのキー/値を取得
// すべてのキー
for (let key of dataMap.keys()) {
    console.log(key);
}
// すべての値
for (let value of dataMap.values()) {
    console.log(value);
}
// すべてのキーと値
for (let [key, value] of dataMap.entries()) {
    console.log(`${key}:${value}`);
}

// 配列ではないので配列化するにはfromメソッドを使う
console.log(Array.from(dataMap.values()));

// forEach
dataMap.forEach(function (value, key) {
    console.log(`key is ${key}. value is ${value}.`);
})

// map→object
let changedObject = Object.fromEntries(dataMap);
console.log(changedObject);

// // objetct→map
let changedMap = new Map(Object.entries(changedObject));
console.log(changedMap);

// 全消し
dataMap.clear();
console.log(dataMap); // Map(0) {size: 0}



/*---------
setオブジェクト
----------*/
// 配列と同じく、複数の値を束ねたオブジェクトだが、順番を持たない・重複した値を受け付けない

let number = new Set([1, 2, 3, 4, 5, 1, 2, 3]);
console.log(number); // Set(5) {1, 2, 3, 4, 5}

// setの場合、add, delete, has, forEachがあり、getは使えない


/*---------
そのほかのオブジェクト
----------*/

// jsonオブジェクト
let jso = JSON.stringify(member);
console.log(jso);
let obj = JSON.parse(jso);
console.log(obj);

// symbolオブジェクト
const MONDAY = Symbol('monday');
console.log(MONDAY);