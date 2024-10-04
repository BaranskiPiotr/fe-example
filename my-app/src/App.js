import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import UserDetails from './UserDetails';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetch('/users.json')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleBack = () => {
    setSelectedUser(null);
    setEditingUser(null);
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleSaveUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
    setSelectedUser(null);
  };

  return (
    <div className="App">
      {editingUser ? (
        <UserDetails user={editingUser} onBack={handleBack} onSave={handleSaveUser} isEditing={true} />
      ) : selectedUser ? (
        <UserDetails user={selectedUser} onBack={handleBack} />
      ) : (
        <UserTable users={users} onUserClick={handleUserClick} onEditClick={handleEditClick} />
      )}
    </div>
  );
}

export default App;
