import React, { useEffect, useState } from 'react';
import { getRoles, deleteRole } from '../../services/api';

function RoleTable() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    const response = await getRoles();
    setRoles(response.data);
  };

  const handleDelete = async (id) => {
    await deleteRole(id);
    fetchRoles();
  };

  return (
    <table className="min-w-full bg-white shadow-md rounded">
      <thead>
        <tr>
          <th className="p-2 border-b">Role</th>
          <th className="p-2 border-b">Permissions</th>
          <th className="p-2 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr key={role.id}>
            <td className="p-2 border-b">{role.name}</td>
            <td className="p-2 border-b">{role.permissions.join(', ')}</td>
            <td className="p-2 border-b">
              <button className="text-red-600" onClick={() => handleDelete(role.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RoleTable;
