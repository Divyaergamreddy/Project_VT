import React from 'react';
import PropTypes from 'prop-types'; // For prop validation
import './EmployeeTable.css'; 

const EmployeeTable = ({ employees = [] }) => {
  return (
    <div className="employee-page">
      <h1 className="employee-heading">Employee Records</h1>
      <table className="employee-table" aria-label="Employee Records">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Phone</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.id}</td>
                <td>{employee.phone}</td>
                <td>{employee.gender}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                None of the Employee Records are found!!!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Prop validation to ensure 'employees' is an array of objects
EmployeeTable.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      phone: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
    })
  ),
};

export default EmployeeTable;
