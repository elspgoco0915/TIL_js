// 純関数
const Recipe = ({ drinkers }) => {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

// 悪い例
// ミューテーションしてしまう
let badGuest = 0;
const BadCup = () => {
  badGuest = badGuest + 1;
  return <h2>Tea Cup for Guest #{badGuest}</h2>
}

const GoodCup = ({guest}) => {
  return <h2>Tea Cup for Guest #{guest}</h2>
}


const Clock = ({ time }) => {
  let hours = time.getHours();
  console.log(hours);

  const type = hours >= 0 && hours <= 6 
                ? 'night' 
                : 'day';
  const timeString = time.toLocaleTimeString();

  return (
    <h1 id="time" className={type}>
      {timeString}
    </h1>
  );
}



const App = () => {

  const selectedTime = new Date("December 25, 1995 23:15:00");

  return (
    <>
      <h1>
        keeping-components-pure
      </h1>
      <section>
        <h2>Recipe</h2>
        <Recipe drinkers={2}/>
        <Recipe drinkers={4}/>
      </section>
      <h1>
        意図せぬ不随処理
      </h1>
      <h2>悪い例</h2>
      <BadCup /><BadCup /><BadCup />
      <h2>よい例</h2>
      <GoodCup guest={1} /><GoodCup guest={2} /><GoodCup guest={3} />
      <hr/>
      <h1>課題</h1>
      <Clock time={selectedTime}/>
    </>
  );
}

export default App;