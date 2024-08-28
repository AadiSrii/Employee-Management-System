# Employee Management System
This is a React-based Employee Management System that allows users to display, sort, filter, search, edit, and delete employee data. The project is designed to handle larger datasets efficiently while maintaining a clean and user-friendly interface.

## Features
 - Display Employees: Employee data is displayed in a table format.
 - Sort Employees: Employees can be sorted by salary (ascending/descending).
 - Filter Employees: Employees can be filtered by gender.
 - Search Employees: Employees can be searched by name using a custom hook (useSearch).
 - Edit Employee Details: Employee details (except ID) can be edited directly in the table.
 - Delete Employees: Employees can be removed from the data.
   
## Project Structure
employee-management-system/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── EmployeeTable.jsx  # Main table component
│   │   ├── EmployeeRow.jsx    # Component for each employee row
│   │   └── SearchBar.jsx      # Search bar component
│   │
│   ├── hooks/
│   │   └── useSearch.js       # Custom hook for search functionality
│   │
│   ├── styles/
│   │   └── App.css            # Main CSS file
│   │
│   ├── App.jsx                # Main App component
│   └── index.js               # Entry point
│
├── .gitignore                 # Git ignore file
├── README.md                  # README file
└── package.json               # Package configuration


## Installation
 - Clone the repository:
       git clone https://github.com/AadiSrii/employee-management-system.git
       cd employee-management-system
 - Install dependencies:
       npm install
 - Start the development server:
       npm run dev
 - Open the application in your browser:
      http://localhost:3000


## Usage
View Employee Data: The main table displays all employees.
Sort Employees: Click on the "Salary" column header to sort employees by salary in ascending or descending order.
Filter by Gender: Use the gender filter to show only male or female employees.
Search by Name: Use the search bar to filter employees by name.
Edit Employee Details: Click on any employee’s details (except ID) to edit them directly in the table.
Delete an Employee: Click the "Delete" button in the employee’s row to remove them from the list.
Customization
You can easily customize the table columns, styles, and features by modifying the components in the src/components directory.

## CSS Styling
The application is styled with custom CSS to ensure it handles large datasets effectively. The table header and search field remain fixed at the top, allowing for smooth scrolling through data while keeping the interface user-friendly.

License
All Right Reserve to AadiSrii.

## Acknowledgements
 - React
 - Vite
