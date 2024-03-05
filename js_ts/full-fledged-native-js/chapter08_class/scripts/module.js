/**
 * モジュール
 * アプリを機能単位に分割するしくみ
 * モジュールでコードをファイル単位に分離できる
 */

import { getTriangleArea, Member } from './lib/util.js';

console.log(getTriangleArea(10, 2));

let m = new Member('山田太郎', 20);
m.show();

// モジュール全体をまとめてインポート
import * as app from './lib/util.js';
let me = new app.Member('テスト太郎', 30);
me.show();

// 別名を付与
import { getTriangleArea as triangle } from './lib/util.js';
console.log(triangle(1, 2));

// 既定のエクスポートをインポート
import Area from './lib/area.js';
console.log(Area.circle(10));

// 別名付きインポートとの組み合わせ
import Area, { VERSION as ver } from './lib/area.js';

// 全インポートとの組み合わせ
import Area, * as a from './lib/area.js';


// 動的インポート
import('./lib/util.js').then(util => {
    console.log(util.getTriangleArea(2, 3));
    let member = new util.Member('taro', 52);
    member.show();
});