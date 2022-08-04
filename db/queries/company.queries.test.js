const insertQuery = require("../queries/company.queries");

test("testing insert company query", () => {
  const testObj = {
    company_name: "twitter",
    company_phone_number: 123456,
    company_email: "twitter@help.com",
    company_website: "www.twitter.com",
  };
  expect(insertQuery.insertCompanyQuery(testObj)).toBe(
    "INSERT INTO xxz8fkuuk6sedzq2.companies (company_name, company_phone_number, company_email, company_website) VALUES('twitter', '123456','twitter@help.com','www.twitter.com');"
  );
});
