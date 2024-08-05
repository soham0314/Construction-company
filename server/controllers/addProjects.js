import express from 'express';
import ProjectsModel from '../models/projectsModel.js';

const Router = express.Router();

Router.get('/', (req, res) => {
  ProjectsModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

Router.post('/', (req, res) => {
  const project = req.body;
  const newProject = new ProjectsModel(project);
  newProject
    .save()
    .then(() => {
      res.send('Project added successfully');
    })
    .catch((err) => {
      console.log(err);
    });
});

export default Router;