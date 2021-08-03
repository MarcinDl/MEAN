const express = require('express');
const app = express();
const studentRoute = express.Router();

// Student model
let Student = require('../model/Student');

// Add Student
studentRoute.route('/').post((req, res, next) => {
  Student.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all student
studentRoute.route('/').get((req, res) => {
  Student.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


module.exports = studentRoute;
