const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Priya!');
});

const users = [
  { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '123456345' },
  { id: 2, name: 'Sabnur', email: 'Sabnur@gmail.com', phone: '123456345' },
  { id: 3, name: 'Sucorita', email: 'Sucorita@gmail.com', phone: '123456345' },
  { id: 4, name: 'Karim', email: 'Karim@gmail.com', phone: '123456345' },
  { id: 5, name: 'Jabir', email: 'Jabir@gmail.com', phone: '123456345' },
  { id: 6, name: 'Purnima', email: 'Purnima@gmail.com', phone: '123456345' },
  { id: 7, name: 'Saba', email: 'Saba@gmail.com', phone: '123456345' },
];

app.get('/users', (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get('/user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id == id);
  res.send(user);
});

app.post('/user', (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get('/fruits', (req, res) => {
  res.send(['Mango', 'Oranges']);
});

app.listen(port, () => {
  console.log(`Listening to Port: ${port}`);
});
