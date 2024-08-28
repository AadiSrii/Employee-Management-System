import React, { useState } from 'react';

const EmployeeTable = ({ employees, onDelete, onEdit }) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortOrder === 'asc') return a.salary - b.salary;
    return b.salary - a.salary;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>
            Salary <button onClick={handleSort}>{sortOrder}</button>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.gender}</td>
            <td>{employee.salary}</td>
            <td>
              <button onClick={() => onEdit(employee)}>Edit</button>
              <button onClick={() => onDelete(employee.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
