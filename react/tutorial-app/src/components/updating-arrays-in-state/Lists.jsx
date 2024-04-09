import { useState } from 'react';

/*
jsの配列はmutable（書き換え可能）なものですが、
stateに格納する場合はimmutabel(書き換え不能)として扱う
よって、配列を書き換える関数は使わない
かわりに、新しい配列を返す
*/

let nextId = 0;

// 配列に要素を追加する
const AddList = () => {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h2>AddList</h2>
      <h3>Inspireing sculptors: </h3>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        // これは書き換えになるのでできない
        // artists.push({
        //   id: nextId++,
        //   name: name,
        // })
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}


// 配列から要素を削除する
let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

const RemoveList = () => {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
      <h2>RemoveList</h2>
      <h3>Inspiring sculptors:</h3>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a => 
                  a.id !== artist.id
                )
              );
            }}> 
              Delete
            </button>
          </li>
        ))}  
      </ul>    
    </>
  )
}

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 950 },
  { id: 1, type: 'square', x: 150, y: 950 },
  { id: 2, type: 'circle', x: 250, y: 950 },
];

// 配列の変換
const ShapeEditor = () => {
  const [shapes, setShapes] = useState(initialShapes);
  const handleClick = () => {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        // Nochange
        return shape;
      } else {
        return {
          // return a new scircle 50px below
          ...shape,
          y: shape.y + 50,

        }
      }
    });
    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>
        Move circles down!
      </button>
      {shapes.map(shape => (
        <div 
          key={shape.id}
          style={{
            // change by state
            left: shape.x,
            top: shape.y,
            // not change
            background: 'purple',
            position: 'absolute',
            borderRadius:
              shape.type === 'circle'
                ? '50%' : '',
            width: 20,
            height: 20,
          }}
        />
      ))}
    </>
  );
}


// 配列内の要素の置換
let initialCounters = [
  0, 0, 0
];

const CounterList = () => {
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrementClick = (index) => {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button onClick={() => {
            handleIncrementClick(i);
          }}>
            +1
          </button>
        </li>
      ))}
    </ul>
  );
}


// 配列への挿入
const InsertList = () => {
  let nextId = 3;
  const initialArtists = [
    { id: 0, name: 'Start! Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];

  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtists);
  
  const handleClick = () => {
    const insertAt = 1;
    // 間に挿入
    const nextArtists = [
      ...artists.slice(0, insertAt),
      {id: nextId++, name: name},
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <>
      <h3>Inspiring sculptors:</h3>
      <input 
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}> 
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

// 配列へのそのほかの変更
const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

const OtherList = () => {
  const [list, setList] = useState(initialList);

  const handleClick = () => {
    // ミュータブルなメソッドでも、先に配列をコピーして使用すれば可能
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleClick}>
        reverse
      </button>
      <ul>
        {list.map(artwork => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}

// 配列内のオブジェクトを更新する

const BucketList = () => {
  let nextId = 3;
  const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
  ];
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  const handleToggleMyList = (artworkId, nextSeen) => {
    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        return { ...artwork, seen: nextSeen };
      } else {
        return artwork;
      }
    }));
  }

  const handleToggleYourList = (artworkId, nextSeen) => {
      const yourNextList = [...yourlist];
      const artwork = yourNextList.find(
        a => a.id === artworkId
      );
      artwork.seen = nextSeen;
      setYourList(yourNextList);
  }


}


const Lists = () => {
  return (
    <>
      <h1>Lists</h1>
      <hr />
      <AddList />
      <hr />
      <RemoveList />
      <hr />
      <ShapeEditor />
      <hr />
      <CounterList />
      <hr />
      <InsertList />
      <hr />
      <OtherList />
    </>
  );

}
export default Lists;