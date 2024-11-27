import React, { useState } from 'react';

const PermissionsPage = () => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: 'Read', description: 'Allows reading data' },
    { id: 2, name: 'Write', description: 'Allows writing data' },
    { id: 3, name: 'Delete', description: 'Allows deleting data' },
  ]);

  const handleDelete = (id) => {
    setPermissions(permissions.filter((perm) => perm.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Permissions Management</h2>
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr>
            <th className="p-2 border-b">Name</th>
            <th className="p-2 border-b">Description</th>
            <th className="p-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td className="p-2 border-b">{permission.name}</td>
              <td className="p-2 border-b">{permission.description}</td>
              <td className="p-2 border-b">
                <button
                  className="text-red-600"
                  onClick={() => handleDelete(permission.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionsPage;
