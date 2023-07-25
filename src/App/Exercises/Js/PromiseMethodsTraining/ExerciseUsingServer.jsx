import './styles.css';
import { useEffect, useState } from 'react';

export function ExerciseUsingServer() {
  // Remember to install jsonServer from NPM https://www.npmjs.com/package/json-server
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      return fetch('http://localhost:3001/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((e) => console.error(e));
    };
    getPosts();

    return () => getPosts;
  }, []);

  return users.map((user) => (
    <div key={user.id} className="user-card">
      <img width={64} height={64} src={user.avatar} alt="" />
      <a href={'http://localhost:3001/user?id=' + user.id}>
        <b>
          {user.name} {user.surname}
        </b>
      </a>
      <a href={`tel:${user.phone}`}>{user.phone}</a>
      <a href={`mailto:${user.email}`}>{user.email}</a>
    </div>
  ));
}
