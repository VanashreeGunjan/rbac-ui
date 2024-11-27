import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './components/users/UserPage';
import RolePage from './components/roles/RolePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <h1 className="text-lg font-bold">RBAC Admin Dashboard</h1>
        </nav>
        <main className="p-4">
          <Routes>
            <Route path="/users" element={<UserPage />} />
            <Route path="/roles" element={<RolePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
