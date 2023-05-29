console.log('tes');

// 基本形
let member = {
    name: '山田太郎',
    age: 21,
    show: function () {
        return `私は${this.name}、${this.age}才です。`;
    },
    // 簡易構文(ES2015)
    easyShow() {
        return `私は${this.name}、${this.age}才です。`;
    }
    // アロー関数はオブジェクト内で使えないので注意！
};

console.log(member.show());
console.log(member.easyShow());

// 変数を用いて同名のプロパティに割り当てることもできる
let myName = '佐藤次郎';
let myBirth = new Date(1990, 1, 1);
let member2 = { myName, myBirth };
console.log(member2.myBirth);
console.log(member2.myName);

// 動的なプロパティ名
let i = 0;
let memos = {
    [`memo${++i}`]: 'メモ1',
    [`memo${++i}`]: 'メモ2',
    [`memo${++i}`]: 'メモ3',
}
console.log(memos);


// コンストラクタでオブジェクトの生成

let member3 = new Object();
member3.name = '鈴木三郎';
member3.age = 29;
member3.show = function () {
    return `私は${this.name}、${this.age}才です。`;
};

console.log(member3.show());

// 詳しい設定付きでオブジェクトの生成
// TODO: エラーで動かないので課題
// object.js:52 Uncaught TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, #<Object>
// at Function.create(<anonymous>)

// 制約エラーを明示的に発生させる
'use strict';

let memberDetail = Object.create(Object.prototype, {
    name: {
        // 値
        value: '川崎太郎',
        // 書き替え可能か
        // writable: true,
        // 属性の変更やプロパティの削除が可能か
        configurable: true,
        // for ... in による列挙が可能か
        enumerable: true,
        get() {
            return 'taro';
            //     return `${this.value} + 'さん`;
        },
        set(value) {
            this._name = '名前:' + value;
        }
    }
});

console.log(memberDetail.name);

