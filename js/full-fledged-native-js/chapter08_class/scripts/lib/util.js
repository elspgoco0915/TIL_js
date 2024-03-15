export const AUTHOR = 'YAMADA YOSHIHIRO';

// 頭にexportをつける
export function getTriangleArea(base, height) {
    return base * height / 2;
}

// 頭にexportをつける
export class Member {
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