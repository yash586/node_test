const readEmpQuery = () => {
  return `select e.emp_first_name as firstName, e.emp_last_name as lastName, e.emp_company_detail as companyDetails, e.emp_email as email, e.emp_phone_number as phoneNumber from employees e  left join companies c on e.emp_company_detail = c.company_name;`;
};

const insertEmpQuery = (empQuery) => {
  return `INSERT INTO xxz8fkuuk6sedzq2.employees
(emp_first_name, emp_last_name, emp_company_detail, emp_email, emp_phone_number)
VALUES('${empQuery.emp_first_name}', '${empQuery.emp_last_name}', '${empQuery.emp_company_detail}', '${empQuery.emp_email}','${empQuery.emp_phone_number}');`;
};

const deleteQuery = (deEmp) => {
  return `Delete from employees WHERE emp_company_detail ='${deEmp}'`;
};

const updateQuery = (empdata, employee) => {
  return `UPDATE xxz8fkuuk6sedzq2.employees
SET emp_first_name='${empdata.emp_first_name}', emp_last_name='${empdata.emp_last_name}', emp_email='${empdata.emp_email}', emp_phone_number= '${empdata.emp_phone_number}' WHERE emp_company_detail= '${employee}'`;
};
module.exports = {
  readEmpQuery,
  insertEmpQuery,
  updateQuery,
  deleteQuery,
};
