const User = require("../models/User");
const jwt = require("jsonwebtoken")
require("dotenv").config()

const UserController = {
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user);
    } catch (error) {
      console.error(error);
    }
  },
  async login(req, res) {
    try {
      //buscamos el usuario que intenta logearse
      const user = await User.findOne({
        email: req.body.email,
      });
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET); //creamos el token
      if (user.tokens.length > 4) user.tokens.shift(); //limitamos las sesiones que pueda tener el usuario
      user.tokens.push(token); // guardamos el nuevo token en el array de tokens del usuario
      await user.save(); //guardamos el usuario modificado en base de datos (.save()método de mongoose)
      res.send({ message: "Bienvenid@ " + user.name, token });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = UserController;
