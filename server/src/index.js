const express = require('express');
const collection = require('./mongo');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/Login', cors(), (req, res) => {
  res.json({ message: 'Hello from login!' });
});

app.post('/Login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json('exist');
    } else {
      res.json('notExist');
    }
  } catch (error) {
    res.json('notExist');
  }
});

app.get('/SignUp', cors(), (req, res) => {
  res.json({ message: 'Hello from SignUp!' });
});

app.post('/SignUp', async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };

  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json('exist');
    } else {
      await collection.insertMany([data]);
    }
  } catch (error) {
    res.json('notExist');
  }
});

app.listen(PORT, () => console.log('port'));
