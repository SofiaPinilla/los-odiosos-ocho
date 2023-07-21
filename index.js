const express = require("express");
const app = express();
require("dotenv").config();
const swaggerUI = require("swagger-ui-express");
const docs = require("./docs/index");
const PORT = process.env.PORT || 3001;
const { dbConnection } = require("./config/config");
dbConnection();

app.use(express.json());

app.use("/tasks", require("./routes/tasks"));
app.use("/users", require("./routes/users"));

//ruta de la documentación
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
