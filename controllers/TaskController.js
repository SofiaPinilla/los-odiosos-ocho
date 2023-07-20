const Task = require("../models/Task")

const TaskController = {
    async create (req, res) {
        try {
            req.body.completed = false
            const task = await Task.create(req.body)
            res.status(201).send({msg: "Tarea creada con exito", task})
        } catch (error) {
            console.error(error)
            res.status(500).send({msg:"Error al crear la tarea", error})
        }
    }

}

module.exports = TaskController;