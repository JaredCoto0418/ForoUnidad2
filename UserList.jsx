const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h2>Usuarios Registrados</h2>
      {users.length === 0 ? (
        <p>No hay usuarios registrados aún.</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              <strong>{u.nombre}</strong> - {u.correo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
