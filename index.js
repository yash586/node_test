const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const joi = require("joi");
const app = express();
const { connectDatabase, endConnection } = require("./db/connection");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "*",
  })
);

require("./routes/company")(app);
require("./routes/employees")(app);

app.listen(port, () => {
  console.log(`
    Example app listening at http://localhost:${port}
    `);
});

connectDatabase();
