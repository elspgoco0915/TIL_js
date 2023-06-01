'use strict';

// クラスはシンタックスシュガー
/**
 * クラスを定義すると、内部的には
 * メソッドがプロトタイプオブジェクトにまとめられ、インスタンスはクラスのプロトタイプを参照している
 */

class Member {
    // コンストラクタ
    constructor(name = '名無権兵衛', age = 0) {
        // this.name = name;
        // this.age = age;
        // ↑の省略系
        Object.assign(this, { name, age });
    }
    show() {
        return `私の名前は${this.name}、${this.age}歳です。`;
    }
}

let m = new Member();
console.log(`${m.name}, ${m.age}`);

let m1 = new Member();
m1.gender = '男性';
console.log(m1);
console.log(m1.show());

let m2 = new Member('山田太郎', 20);
console.log(m2.show());

/*
* 静的プロパティ、メソッド
*/

class Area {
    // 静的イニシャライザー
    // クラスを初回評価(ロード)したときに一度だけ実行
    static {
        console.log('static_init');
    }
    // 静的プロパティ
    static pi = 3.14;

    // const定数は定義できないのでstaticを使う
    static VALUE = 10;

    // 静的メソッド
    static circle(radius) {
        return (radius ** 2) * this.pi;
    }
}

// インスタンスを生成しないで呼び出せる
// 静的プロパティは、読み取り専用などに使える
console.log(Area.pi);
console.log(Area.circle(10));


// メソッドを動的に追加

Member.prototype.greet = function () {
    return `こんにちは、${this.name}さん`;
};

console.log(m2.greet());

/*
カプセル化
利用者に見せたくない機能を隠ぺいする
*/


class Member2 {
    // プライベートプロパティ
    #name = '';
    #age = 0;

    // コンストラクタ
    constructor(name = '名無権兵衛', age = 0) {
        this.#name = name;
        this.#age = age;
    }

    // プライベートメソッド
    #createMessage() {
        return `私の名前は${this.#name}、${this.#age}歳です。`;
    }

    // パブリックメソッド
    show() {
        console.log(this.#createMessage());
    }
}

let m3 = new Member2('佐藤次郎', 15);
m3.show();

// 外部からはアクセスできない(エラーになる)
// console.log(m.#name);
// console.log(m.#createMessage());

/**
 * 不変クラス
 */
class Member3 {
    // ★すべてのプロパティはプライベート宣言
    #name = '';
    #birth = new Date();

    // コンストラクタ
    constructor(name = '名無権兵衛', age = 0, birth) {
        this.#name = name;
        this.#birth = new Date(birth.getTime());
        // ★プロパティ/メソッドの追加を禁止
        Object.freeze(this);
    }

    get name() {
        return this.#name;
    }

    // 参照型を返すゲッター
    get birth() {
        return new Date(this.#birth.getTime());
    }

    show() {
        console.log(`私の名前は${this.#name}。誕生日は${this.#birth.toDateString()}です。`);
    }

    // ★プロパティの変更はwithXxxxメソッドを使う
    withName(name) {
        return new Member(name, this.birth);
    }
}
// ★プロパティ/メソッドの追加を禁止
Object.freeze(Member.prototype);


/**
 * 継承
 */

class BusinessMember extends Member {

    // コンストラクタのオーバーライドも可能
    constructor(name = '名無し', age = 18, title = '社員') {
        // 既定クラスのコンストラクターを呼び出し
        super(name, age);
        this.title = title;
    }

    work() {
        return `${this.name}は働いています。`;
    } ''

    // オーバーライド
    show() {
        return `私の名前は${this.name}${this.title}、${this.age}歳です。働いてます。`;
    }

    // 基底クラスのメソッドを呼び出す
    showBase() {
        return `${super.show()}`;
    }
}

let bm = new BusinessMember('働きもの', 30);
console.log(bm.work());
console.log(bm.show());
console.log(bm.showBase());

/**
 * ミックスイン
 */
// 再利用可能な機能を束ねたオブジェクト

let LogMixin = {
    showProperties() {
        for (let [key, value] of Object.entries(this)) {
            console.log(`${key}: ${value}`);
        }
    }
}

class Hamster {
    name = 'まめ';
    gender = 'male';
    age = 2;
}

// ミックスインを組み込み
Object.assign(Hamster.prototype, LogMixin);

let ham = new Hamster();
ham.showProperties();

// オブジェクトの型判定
class Animal { }
class Cat extends Animal { }
let ani = new Animal();
let cat = new Cat();

console.log(ani.constructor === Animal); // true
console.log(cat.constructor === Animal); // false
console.log(cat.constructor === Cat);// true

console.log(cat instanceof Animal); //true
console.log(cat instanceof Cat);    //true

console.log(Cat.prototype.isPrototypeOf(cat));
console.log(Animal.prototype.isPrototypeOf(cat));
console.log(Object.prototype.isPrototypeOf(cat));


let obj = { hoge: function () { }, foo: function () { } };
console.log('hoge' in obj);
console.log('piyo' in obj);
