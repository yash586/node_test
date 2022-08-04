const { connection } = require("../db/connection");
const {
  insertCompanyQuery,
  updateCompanyQuery,
  deleteQuery,
} = require("../db/queries/company.queries");

const readCompanyDetails = async () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "Select * from xxz8fkuuk6sedzq2.companies",
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
};

const createCompanyDetails = async (companyDetails) => {
  return new Promise((resolve, reject) => {
    connection.query(insertCompanyQuery(companyDetails), (error, elements) => {
      console.log(insertCompanyQuery(companyDetails));
      console.log(error, elements);
      if (error) {
        return reject(error);
      }
      if (elements.affectedRows === 1) {
        return resolve({ message: "Record inserted" });
      }
      return reject({ message: "Record not updated" });
    });
    //     companies.create({
    //     company_name: companyDetails.company_name,
    //     company_phone_number: companyDetails.company_phone_number,
    //     ....
    // }).then((resp) => {
    //   return resolve(elements)
    // })
    // .catch((err) => {
    //   return reject(err);
    // })
  });
};

const updateComapanyDetails = async (companyData, companyName) => {
  return new Promise((resolve, reject) => {
    connection.query(
      updateCompanyQuery(companyData, companyName),
      (error, elements) => {
        console.log(updateCompanyQuery(companyData, companyName));
        console.log(error, elements);
        if (error) {
          return reject(error);
        }
        if (elements.affectedRows === 1) {
          return resolve({ message: "Record updated successful" });
        }
        return reject({ message: "records not updated" });
      }
    );
  });
};

const deleteCompanyDetails = async (companyName) => {
  return new Promise((resolve, reject) => {
    connection.query(deleteQuery(companyName), (error, elements) => {
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
  readCompanyDetails,
  createCompanyDetails,
  updateComapanyDetails,
  deleteCompanyDetails,
};
