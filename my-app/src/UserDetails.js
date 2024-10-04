import React from 'react';

const UserDetails = ({ user, onBack }) => {
  return (
    <div>
      <h2>User Details</h2>
      <button onClick={onBack}>Back to User List</button>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Date of Birth:</strong> {user.dob}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
};

export default UserDetails;