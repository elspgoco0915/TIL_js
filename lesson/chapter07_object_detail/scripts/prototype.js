console.log('');

// プロトタイプ = オブジェクトのもととなる機能を提供するオブジェクト
let parent = {
    x: 10,
    y: 20,
};

let obj = Object.create(parent, {
    z: {
        value: 30,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

console.log(obj);   // {z:30}
console.log(Object.getPrototypeOf(obj)); // {x:10, y:20}
console.log(obj.z); // オブジェクトのプロパティ
console.log(obj.x); // プロトタイプのプロパティ
console.log(obj.y); // プロトタイプのプロパティ

// オブジェクトとプロトタイプのプロパティを列挙
for (let prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);
}

// プロパティの設定
obj.a = 100;
console.log(obj);   // {z:30, a:100}
console.log(Object.getPrototypeOf(obj)); // {x:10, y:20}


// ゲッター、セッターの場合
let parent2 = Object.create(Object.prototype, {
    x: {
        get() {
            return this._x ?? 10;
        },
        set(value) {
            console.log(`setter is called:${value}`);
            this._x = value;
        },
        configurable: true,
        enumerable: true,
    },
    y: {
        value: 20,
        writable: true,
        configurable: true,
        enumerable: true,
    }
});

let obj2 = Object.create(parent2, {
    z: {
        value: 30,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

console.log(obj2);
obj2.x = 100;
console.log(parent2); // {y: 20}
console.log(obj2); // {z: 30, _x: 100}
console.log(obj2.x); // 100


// プロパティの削除
console.log(obj);   // {z:30}
console.log(Object.getPrototypeOf(obj)); // {x:10, y:20}
console.log(parent); // {x:10, y:20}
obj.x = 1000;
console.log(obj.x) // オブジェクトのプロパティなので、1000

console.log(delete obj.x);
console.log(obj.x); // プロトタイプのプロパティになり10

// assignメソッド
// Object.assign(traget, source, ...)
// target: ターゲット、
// source: コピー元(可変長引数)

let pet = {
    type: 'ハムスター',
    name: 'ハム太郎',
    description: {
        birth: '2023-5-1'
    },
};

let pet2 = {
    name: '上書き太郎',
};

let pet3 = {
    description: {
        food: 'ひまわりの種'
    },
};

//petに上書きされる
// name, descriptionは、あとのものに上書きされる
Object.assign(pet, pet2, pet3);
console.log(pet);

// 元のオブジェクトに影響させたくない場合は以下のように書く
// let merged = Object.assign({}, pet, pet2, pet3);

// オブジェクトの複製
// 参照の複製のため、入れ子になったオブジェクトに対してはcopeidとpetのどちらにも影響してしまう
let copied = Object.assign({}, pet);

// ディープコピー
let origin = { hoge: 1, foo: { bar: 100 } };
let deepCopied = JSON.parse(JSON.stringify(origin));
console.log(origin);
deepCopied.hoge = 100;
console.log(origin.hoge, deepCopied.hoge);
// この場合、jsonオブジェクトに対応している方に限られる(=関数などが使えない)
// lodashというライブラリでもディープコピーができる
// lodash.com

// プロパティの操作
// TODO: 23.5.29 21:25 ここまで！
// objectDefineProperty()
