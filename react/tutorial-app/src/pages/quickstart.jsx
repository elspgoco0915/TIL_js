import './../styles/quickstart.css';

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
      <img 
        src={user.imageUrl} 
        className="avatar" 
      />
    </>
  );
}




export default QuickStart;