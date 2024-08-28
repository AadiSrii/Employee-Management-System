import React, { useState, useEffect } from 'react';
import EmployeeTable from './components/EmployeeTable';
import SearchBar from './components/SearchBar';
import GenderFilter from './components/GenderFilter';
import EditEmployeeModal from './components/EditEmployeeModal';
import { useSearch } from './hooks/useSearch';
import employeeData from './data/employees.json';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [gender, setGender] = useState('');
  const [editingEmployee, setEditingEmployee] = useState(null);

  const { query, setQuery, filteredData } = useSearch(employees, 'name');

  useEffect(() => {
    setEmployees(employeeData);
  }, []);

  useEffect(() => {
    let filtered = filteredData;
    if (gender) {
      filtered = filtered.filter(employee => employee.gender === gender);
    }
    setFilteredEmployees(filtered);
  }, [filteredData, gender]);

  const handleDelete = id => {
    setEmployees(prevEmployees => prevEmployees.filter(emp => emp.id !== id));
  };

  const handleEdit = employee => {
    setEditingEmployee(employee);
  };

  const handleSave = updatedEmployee => {
    setEmployees(prevEmployees =>
      prevEmployees.map(emp =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
  };

  return (
    <div>
      <h1>Employee Management System</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <GenderFilter setGender={setGender} />
      <EmployeeTable
        employees={filteredEmployees}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      {editingEmployee && (
        <EditEmployeeModal
          employee={editingEmployee}
          onClose={() => setEditingEmployee(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default App;
