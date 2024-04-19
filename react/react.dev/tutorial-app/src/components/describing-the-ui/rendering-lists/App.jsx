const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

const detailPeople = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

const getImageUrl = (person) => {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}

const List = () => {
  const chemists = detailPeople.filter(person => person.profession === 'chemist');

  // アロー関数は => の直後の式を自動的に返しますので、return 文を直接書く必要はありません。
  const detailListItems = chemists.map(person => 
    <li key={person.id}>
      <img 
        src={getImageUrl(person)}
        alt={person.name}
        />
      <p>
        <b>{person.name}</b>
        {' ' + person.profession +' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  return (
    <>
      <ul>{detailListItems}</ul>
    </>
  );
}

export default List;