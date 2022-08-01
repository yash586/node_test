const { json } = require("express");

const companyController = require("../controllers/company.controller");

module.exports = function (app) {
  app.get("/companies", async function (request, response) {
    try {
      const result = await companyController.readCompanyDetails();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  });

  app.post("/companies", async function (request, response) {
    try {
      const result = await companyController.createCompanyDetails(request.body);
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  });

  app.patch("/companies/:company_name?", async function (request, response) {
    try {
      const result = await companyController.updateComapanyDetails(
        request.body,
        request.params.company_name
      );
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  });

  app.delete("/companies/:company_name?", async function (request, response) {
    try {
      const result = await companyController.deleteCompanyDetails(
        request.params.company_name
      );
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  });
};
