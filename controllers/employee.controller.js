const { connection } = require("../db/connection");
const {
  readEmpQuery,
  insertEmpQuery,
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

const changeEmployeeDetails = async () => {};

const deleteEmployeeDetails = async (deEmp) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `Delete from employees WHERE emp_company_detail ='${deEmp}'
      ;`,
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
};

module.exports = {
  employeeDetails,
  generateEmployeeDetails,
  changeEmployeeDetails,
  deleteEmployeeDetails,
};
