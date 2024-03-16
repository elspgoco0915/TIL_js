const getImageUrl = (person, size = 100) => {
    const outputSize = (size < 90)  ? 's' : 'b';
    return (
      'https://i.imgur.com/' + person.imageId + outputSize + '.jpg'
    );
}


const Icon = ({ person, size = 100 }) => {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

const Card = ({ children }) => {
  return (
    <div className="card">
      <h2>MyProfile</h2>
      {children}
    </div>
  );
}

const Profile = () => {
  return (
    <Card>
      <Icon 
        person={{ name: 'akilu', imageId: 'OKS67lh' }}
        size={150}
      />
    </Card>
  );
}

const Profiles = ({}) => {
  return (
    <div>
      <Icon 
        person={{ name: 'lin', imageId: '1bX5QH6' }}
      />
      <Icon 
      person={{ name: 'akilu', imageId: 'OKS67lh' }}
      size={150}
      />
      <Icon 
      person={{ name: 'katsuko', imageId: 'YfeOqp2' }}
      size={200}
      />
      <Profile />
    </div>
  );
}

const MyProfile = ({person, size}) => {

  const awardRows = [];
  person.awards.forEach((element, index) => {
    awardRows.push(
      <div key={index}>
        {element}
      </div>
    );
  });

  return (
    <>
      <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(person, size)}
        alt={person.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b> 
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b> 
          {awardRows}
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovered}
        </li>
      </ul>
      </section>
    </>
  );
}

const Gallery = () => {
  return (
    <Card>
      <MyProfile
        person={{ 
          name: 'Maria Skłodowska-Curie',
          imageId: '1bX5QH6',
          profession: 'physicist and chemist',
          awards:  ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
          discovered: 'polonium (chemical element)'
        }}
        size={30}
      />
    </Card>
  );
}

const App = () => {
  return (
    <>
      <Profiles />
      <hr />
      <Gallery />
    </>
  );
}

export default App;