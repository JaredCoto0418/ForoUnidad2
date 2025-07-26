import { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem('usuarios');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="container">
      <h1>Registro de Usuarios</h1>
      <UserForm onAdd={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
