import React, { useState } from 'react';

const EditEmployeeModal = ({ employee, onClose, onSave }) => {
  const [editedEmployee, setEditedEmployee] = useState({ ...employee });

  const handleChange = e => {
    const { name, value } = e.target;
    setEditedEmployee(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(editedEmployee);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Edit Employee</h2>
      <input
        type="text"
        name="name"
        value={editedEmployee.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gender"
        value={editedEmployee.gender}
        onChange={handleChange}
      />
      <input
        type="number"
        name="salary"
        value={editedEmployee.salary}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditEmployeeModal;
