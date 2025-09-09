const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3002;

app.use(express.json());

const products = [
  { id: 1, name: 'Notebook', userId: 1 },
  { id: 2, name: 'Mouse', userId: 2 }
];

app.get('/products', async (req, res) => {
  try {
    // Aqui usamos o nome do serviço (container) ao invés de localhost
    const { data: users } = await axios.get('http://user-service:3001/users');

    const productsWithUser = products.map(prod => ({
      ...prod,
      user: users.find(u => u.id === prod.userId)
    }));

    res.json(productsWithUser);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

app.listen(PORT, () => {
  console.log(`Product Service rodando em http://localhost:${PORT}`);
});
