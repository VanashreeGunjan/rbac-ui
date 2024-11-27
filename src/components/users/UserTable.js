import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../../services/api';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <table className="min-w-full bg-white shadow-md rounded">
      <thead>
        <tr>
          <th className="p-2 border-b">Name</th>
          <th className="p-2 border-b">Email</th>
          <th className="p-2 border-b">Role</th>
          <th className="p-2 border-b">Status</th>
          <th className="p-2 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="p-2 border-b">{user.name}</td>
            <td className="p-2 border-b">{user.email}</td>
            <td className="p-2 border-b">{user.role}</td>
            <td className="p-2 border-b">{user.status}</td>
            <td className="p-2 border-b">
              <button className="text-red-600" onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
