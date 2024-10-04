import React from 'react';

const UserTable = ({ users, onUserClick }) => {
  return (
    <div>
      <h2>User List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td onClick={() => onUserClick(user)}>{user.firstName}</td>
              <td onClick={() => onUserClick(user)}>{user.lastName}</td>
              <td onClick={() => onUserClick(user)}>{user.dob}</td>
              <td onClick={() => onUserClick(user)}>{user.gender}</td>
              <td>
                <button onClick={() => {}}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
