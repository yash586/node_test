const insertCompanyQuery = (companyQuery) => {
  return `INSERT INTO xxz8fkuuk6sedzq2.companies (company_name, company_phone_number, company_email, company_website) VALUES('${companyQuery.company_name}', '${companyQuery.company_phone_number}','${companyQuery.company_email}','${companyQuery.company_website}');`;
};
const updateCompanyQuery = (updateQuery, companyName) => {
  return `UPDATE xxz8fkuuk6sedzq2.companies
 SET  company_email='${updateQuery.company_email}', company_website='${updateQuery.company_website}'
WHERE company_name='${companyName}'`;
};
const deleteQuery = (companyName) => {
  return `DELETE FROM xxz8fkuuk6sedzq2.companies
WHERE company_name='${companyName}';`;
};

module.exports = {
  insertCompanyQuery,
  updateCompanyQuery,
  deleteQuery,
};
