/**
 * dom
 * 
 */
//  getElementById
let current = new Date();
let result = document.getElementById('result');
result.textContent = current.toLocaleString();

// querySelector
// セレクター式で呼ぶ
let result2 = document.querySelector('#list .ex');
console.log(result2.href);


// 要素群の取得
let list = document.querySelectorAll('#list .my');
for (let elem of list) {
    console.log(elem.textContent);
}

// ノードウォーキング
let s = document.querySelector('#food');
let opts = s.children;
for (let opt of opts) {
    console.log(opt.value);
}

// 別の取得方法
let opts2 = s.childNodes;
for (let opt of opts) {
    // 要素ノード=1
    if (opt.nodeType === 1) {
        console.log(opt.value);
    }
}

// イベントドリブンモデル
let text = document.querySelector('.text');
text.addEventListener('click', function () {
    console.log('click!');
}, false);


// getattribute
// removeattribute

// スタイルの操作
let elem = document.querySelector('#elem');
console.log(elem);
elem.addEventListener('mouseenter', function () {
    this.style.backgroundColor = 'Yellow';
}, false);
elem.addEventListener('mouseleave', function () {
    this.style.backgroundColor = '';
}, false);

// 6.1 p462まで