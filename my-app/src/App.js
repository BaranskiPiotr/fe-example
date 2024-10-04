import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import UserDetails from './UserDetails';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

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
  };

  return (
    <div className="App">
      {selectedUser ? (
        <UserDetails user={selectedUser} onBack={handleBack} />
      ) : (
        <UserTable users={users} onUserClick={handleUserClick} />
      )}
    </div>
  );
}

export default App;