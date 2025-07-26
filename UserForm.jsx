import { useState } from 'react';

const UserForm = ({ onAdd }) => {
  const [form, setForm] = useState({ nombre: '', correo: '', contraseña: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.correo || !form.contraseña) return;
    onAdd({ ...form, id: Date.now() });
    setForm({ nombre: '', correo: '', contraseña: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
      />
      <input
        type="email"
        name="correo"
        placeholder="Correo"
        value={form.correo}
        onChange={handleChange}
      />
      <input
        type="password"
        name="contraseña"
        placeholder="Contraseña"
        value={form.contraseña}
        onChange={handleChange}
      />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default UserForm;
