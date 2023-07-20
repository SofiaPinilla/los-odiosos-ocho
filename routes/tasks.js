const express = require("express")
const TaskController = require("../controllers/TaskController")
const router = express.Router()

router.post("/", TaskController.create)

module.exports = router