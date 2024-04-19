import './../styles/quickstart.css';
import { useState } from 'react';

const QuickStart = () => {

  // コンポーネント間でデータを共有する(stateのリフトアップ) 
  const [sharedCount, setSharedCount] = useState(0);
  const handleClick = () => {
    setSharedCount(sharedCount + 1);
  };

  return (
    <div>
      <h1>QuickStart</h1>

      <h2>Button</h2>
      <h3>components</h3>
      <MyButton />
      <MyButton />
      <h3>sharedCount</h3>
      <SharedCountButton count={sharedCount} onClick={handleClick} />
      <SharedCountButton count={sharedCount} onClick={handleClick} />
      <h2>Profile</h2>
      <Profile />
      <h2>ShoppingList</h2>
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

// コンポーネント間でデータを共有する 
const SharedCountButton = ({count, onClick}) => {
  return (
    <button onClick={onClick}>
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