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
    },
    async getAll(req, res) {
        try {
            const tasks = await Task.find()
            res.status(200).send({msg: "Aqui tienes todas las tareas", tasks})
        } catch (error) {
            console.error(error)
            res.status(500).send({msg: "Error al traer todas las tareas", error})
        }
    }

}

module.exports = TaskController;