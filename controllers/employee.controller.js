const { connection } = require("../db/connection");
const {
  readEmpQuery,
  insertEmpQuery,
  updateQuery,
  deleteQuery,
} = require("../db/queries/employee.queries");
const employeeDetails = async () => {
  return new Promise((resolve, reject) => {
    connection.query(readEmpQuery(), (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};

const generateEmployeeDetails = async (empData) => {
  return new Promise((resolve, reject) => {
    connection.query(insertEmpQuery(empData), (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};

const changeEmployeeDetails = async (empDetails, employee) => {
  return new Promise((resolve, reject) => {
    connection.query(updateQuery(empDetails, employee), (error, elements) => {
      if (error) {
        return reject(error);
      }
      if (elements.affectedRows === 1) {
        return resolve({ message: "Employee Record Updated" });
      }
      return reject({ message: "Employee Record not updated" });
    });
  });
};

const deleteEmployeeDetails = async (deEmp) => {
  return new Promise((resolve, reject) => {
    connection.query(deleteQuery(deEmp), (error, elements) => {
      if (error) {
        return reject(error);
      }
      if (elements.affectedRows === 1) {
        return resolve({ message: "Record deleted" });
      }
      return reject({ message: "Record not deleted" });
    });
  });
};

module.exports = {
  employeeDetails,
  generateEmployeeDetails,
  changeEmployeeDetails,
  deleteEmployeeDetails,
};
