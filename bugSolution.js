const express = require('express');
const app = express();
app.get('/users/:id(\d+)', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  // ... database query to fetch user with userId ...
  if (isNaN(userId) || !user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});