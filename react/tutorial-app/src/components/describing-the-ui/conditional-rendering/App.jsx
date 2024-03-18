const Item = ({ 
  name, 
  isPacked, 
  isHidden = false, 
  importance = 0
}) => {
  if (isHidden) {
    return null;
  }

  let itemContent = name;
  if (isPacked) {
    itemContent = name + ' ✔';
  }

  return (
    <>
      {/* <ul>三項演算子</ul> */}
      <li className="item">
        { 
          isPacked 
          ? <del>{`${name} ✔`}</del> 
          : name   
        }
      </li>
      {/* <ul>論理AND演算子</ul> */}
      <li className="item">
        {name} {isPacked && '✔'}
      </li>
      {/* 変数を用いる場合 */}
      <li className="item">
        {itemContent}
      </li>
      {/* チャレンジ1,2 */}
      <li className="item">
        {name} {isPacked ? '✔' : '❌' }
        {importance > 0 && `(Importance: ${importance})`}
      </li>
    </>
  );
}

const PackagingList = () => {
  return (
    <section>
      <h1>packing list</h1>
      <ul>
        <Item 
          isPacked={true}
          name="Space suit"
        />
        <Item 
          isPacked={true}
          name="Helmet"
          isHidden={true}
        />
        <Item 
          isPacked={false}
          name="Photo"
          importance={10}
        />
      </ul>
    </section>
  );
}

// チャレンジ3
const Drink = ({ name }) => {

  let spec = [];
  if (name === 'tea') {
    spec.plant = 'leaf';
    spec.content = '15–70 mg/cup';
    spec.age = '4,000+ years';
  }else if (name === 'coffee') {
    spec.plant = 'bean';
    spec.content = '80–185 mg/cup';
    spec.age = '1,000+ years';
  }
  
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{spec.plant}</dd>
        <dt>Caffeine content</dt>
        <dd>{spec.content}</dd>
        <dt>Age</dt>
        <dd>{spec.age}</dd>
      </dl>
    </section>
  );
}

const DrinkList = () => {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

const App = () => {
  return (
    <>
      <PackagingList />
      <DrinkList />
    </>
  );
}



export default App;