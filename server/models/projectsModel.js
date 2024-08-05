import mongoose from 'mongoose';

const projectsSchema = mongoose.Schema({
  name: String,
  description: String,
  image: String,
  city: String,
  cost: String,
  duration: String,
});

const ProjectsModel = mongoose.model('Recipe', projectsSchema);

export default ProjectsModel;
