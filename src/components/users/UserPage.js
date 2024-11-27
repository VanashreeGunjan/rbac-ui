import React, { useState } from 'react';
import UserTable from './UserTable';
import UserForm from './UserForm';

const UserPage = () => {
  const [showForm, setShowForm] = useState(false);  

 
  const handleAddUserClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      
 
      <button 
        onClick={handleAddUserClick} 
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add New User
      </button>

       
      {showForm && (
        <UserForm
          onClose={() => setShowForm(false)}  
          onSubmit={() => {
            console.log('User added or updated');
            setShowForm(false);  
          }}
        />
      )}
 
      <UserTable />
    </div>
  );
};

export default UserPage;
