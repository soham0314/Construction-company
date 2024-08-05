import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Router from './controllers/addProjects.js';

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());
const CONNECTION_URL = 'mongodb+srv://ani:1234@cluster0.f1gtezk.mongodb.net/?retryWrites=true&w=majority'

app.use('/projects', Router);
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });