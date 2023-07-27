import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import { getImageUrl } from "./components/utils";

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function Avatar({ person, size }) {
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

export default function ProfileCard() {
  return (
    <>
      <TodoList />
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>

      <hr/>

      <Card>
        <Avatar
          size={100}
          person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />
      </Card>
    </>
  );
}