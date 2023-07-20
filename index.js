const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 3001
const { dbConnection } = require("./config/config")
dbConnection()


app.use(express.json())

app.use("/tasks", require("./routes/tasks"))


app.listen(PORT, ()=>console.log(`Servidor levantado en el puerto ${PORT}`))