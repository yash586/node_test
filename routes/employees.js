const { json } = require("express");

const employeeController = require("../controllers/employee.controller");

module.exports = function (app) {
  app.get("/employees", async function (request, response) {
    try {
      const result = await employeeController.employeeDetails();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  });

  app.post("/employees", async function (request, response) {
    try {
      const result = await employeeController.generateEmployeeDetails(
        request.body
      );
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  });

  app.patch(
    "/employees/:emp_company_detail?",
    async function (request, response) {
      try {
        const result = await employeeController.changeEmployeeDetails(
          request.body,
          request.params.emp_company_detail
        );
        response.json(result);
      } catch (error) {
        response.json(error);
      }
    }
  );

  app.delete(
    "/employees/:emp_company_name?",
    async function (request, response) {
      try {
        const result = await employeeController.deleteEmployeeDetails(
          request.params.emp_company_name
        );
        response.json(result);
      } catch (error) {
        response.json(error);
      }
    }
  );
};
