const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();

router.post('/', TaskController.create);
router.get('/get', TaskController.getAll);
router.get('/getTaskById/:_id', TaskController.getTaskById);
router.put('/markAsCompleted/:_id', TaskController.markAsCompleted)

module.exports = router;
