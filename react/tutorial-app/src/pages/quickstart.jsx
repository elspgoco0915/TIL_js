import './../styles/quickstart.css';
import { useState } from 'react';

const QuickStart = () => {
  return (
    <div>
      <h1>QuickStart</h1>
      <MyButton />
      <MyButton />
      <Profile />
      <ShoppingList />
    </div>
  );
}

// コンポーネントの作成
// イベントに応答する
const MyButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} Times
    </button>
  );
}

// データの表示、スタイルの追加
const Profile = () => {  
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
  return (
    <>
      <h1>{user.name}</h1>
      <img 
        src={user.imageUrl} 
        className="avatar" 
      />
    </>
  );
}

// 条件分岐とリストのレンダー
const ShoppingList = () => {
  const products = [
    { title: 'cabbage', isFruit: false, id: 1 },
    { title: 'garlic', isFruit: false, id: 2 },
    { title: 'apple', isFruit: true, id: 3 },
  ];

  const listItems = products.map(product => 
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );

  return (
    <ul>{listItems}</ul>
  );
}


export default QuickStart;