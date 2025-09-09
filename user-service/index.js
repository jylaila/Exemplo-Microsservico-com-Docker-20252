const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`User Service rodando em http://localhost:${PORT}`);
});
