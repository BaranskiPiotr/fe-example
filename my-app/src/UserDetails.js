import React, { useState } from 'react';

const UserDetails = ({ user, onBack, onSave, isEditing }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    onSave(editedUser);
  };

  return (
    <div>
      <h2>{isEditing ? 'Edit User' : 'User Details'}</h2>
      <button onClick={onBack}>Back to User List</button>

      {isEditing ? (
        <div>
          <p>
            <label>First Name: </label>
            <input type="text" name="firstName" value={editedUser.firstName} onChange={handleChange} />
          </p>
          <p>
            <label>Last Name: </label>
            <input type="text" name="lastName" value={editedUser.lastName} onChange={handleChange} />
          </p>
          <p>
            <label>Date of Birth: </label>
            <input type="date" name="dob" value={editedUser.dob} onChange={handleChange} />
          </p>
          <p>
            <label>Gender: </label>
            <select name="gender" value={editedUser.gender} onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </p>
          <p>
            <label>Email: </label>
            <input type="email" name="email" value={editedUser.email} onChange={handleChange} />
          </p>
          <p>
            <label>Address: </label>
            <input type="text" name="address" value={editedUser.address} onChange={handleChange} />
          </p>
          <p>
            <label>Phone: </label>
            <input type="tel" name="phone" value={editedUser.phone} onChange={handleChange} />
          </p>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Date of Birth:</strong> {user.dob}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
