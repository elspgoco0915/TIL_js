// confirm
document.querySelector('#fm').addEventListener('submit', function (e) {
    if (!window.confirm('ページを確認する処理')) {
        e.preventDefault();
    }
}, false);

// setinterval, settimeout
let result = document.querySelector('#result');
let timer = window.setInterval(
    function () {
        result.textContent = (new Date()).toLocaleTimeString();
    }, 5000);

document.querySelector('#btn').addEventListener('click', function () {
    window.clearInterval(timer);
});

// windowオブジェクト
document.querySelector('#btn2').addEventListener('click', function () {
    document.body.requestFullscreen();
});

// consoleオブジェクト
console.log('ログ');
console.info('情報');
console.warn('警告');
console.error('エラー');
console.log('こんにちは、%sです。%d歳です。', '太郎', '49');


// storageオブジェクト
// storage二種類
/*
localStorage
- オリジン単位でデータを管理。ウィンドウ・タブをまたいでデータの共有が可能
- ブラウザを閉じてもデータを維持
*/

/*
sessionStorage
-ウィンドウ・タブ間でまたいでデータを共有することができない
- 現在のセッション(ブラウザが開いてる間)だけで維持される
*/

let storage = localStorage;
// 保存
storage.setItem('fruit1', 'りんご');
storage.fruit2 = 'みかん';
storage['fruit3'] = 'レモン';

// 取得
console.log(storage.getItem('fruit1'));
console.log(storage.fruit2);
console.log(storage['fruit3']);

// 全取得
for (let i = 0; i < storage.length; i++) {
    let key = storage.key(i);
    console.log(`${key}: ${storage[key]}`);
}


// 削除
storage.removeItem('fruit1');
delete storage.fruit2;
delete storage['fruit3'];

// オブジェクトの追加
let apple = {
    name: 'りんご',
    price: 100,
};

storage.setItem('apple', JSON.stringify(apple));
let data = JSON.parse(storage.getItem('apple'));
console.log(data.name);

