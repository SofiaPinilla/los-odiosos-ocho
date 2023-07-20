const Task = require("../models/Task");

const TaskController = {
  async create(req, res) {
    try {
      req.body.completed = false;
      const task = await Task.create(req.body);
      res.status(201).send({ msg: "Tarea creada con exito", task });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error al crear la tarea", error });
    }
  },
  async getAll(req, res) {
    try {
      const tasks = await Task.find();
      res.status(200).send({ msg: "Aqui tienes todas las tareas", tasks });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error al traer todas las tareas", error });
    }
  },
  async getTaskById(req, res) {
    try {
      const taskById = await Task.findById(req.params._id);
      res.status(200).send({ msg: "Aquí tienes la tarea por el id", taskById });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error al traer la tarea", error });
    }
  },
  async markAsCompleted(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params._id,
        { completed: true },
        { new: true }
      );
      res.status(200).send({ msg: "Tarea marcada con exito", task });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error al marcar la tarea", error });
    }
  },

  async updateTitle(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params._id,
        { title: req.body.title },
        { new: true }
      );

      res.status(200).send({ msg: "Título actualizado con exito", task });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error al marcar la tarea", error });
    }
  },

  async deleteTask(req, res) {
    try {
      const task = await Task.findByIdAndDelete(req.params._id);

      res.status(200).send({ msg: "Tarea eliminada con exito", task });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error al eliminar la tarea", error });
    }
  },
};

module.exports = TaskController;
