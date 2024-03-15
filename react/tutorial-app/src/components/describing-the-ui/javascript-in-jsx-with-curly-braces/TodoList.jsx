const today = new Date();
const formatDate = (date) => {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Taro',
  avatar: {
    id: '7vQD0fPs',
    size: 's',
  },
  theme: {
    backgroundColor: 'black',
    color: 'green'
  }
};

const Avatar = () => {
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      // src={person.avatar.src}
      src={baseUrl + person.avatar.id + '.jpg'}
      alt={description}
    />
  );
}

const TodoList = () => {
  return (
    <ul style={person.theme}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

const Todos = () => {
  return (
    <>
      <h1>{person.name}'s TodoList</h1>
      <Avatar />
      <h2>Todo list for {formatDate(today)}</h2>
      <TodoList />
    </>
  );
}

export default Todos;