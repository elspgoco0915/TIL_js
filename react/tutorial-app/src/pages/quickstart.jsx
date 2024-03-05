const QuickStart = () => {
  return (
    <div>
      <h1>QuickStart</h1>
      <MyButton />
      <Profile />
    </div>
  );
}

const MyButton = () => {
  return (
    <button>I'm a Button</button>
  );
}

const Profile = () => {  
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
  return (
    <>
      <h1>{user.name}</h1>
      {/* https://ja.react.dev/learn#writing-markup-with-jsx */}
      <img src={user.imageUrl} alt="" />
    </>
  );
}




export default QuickStart;