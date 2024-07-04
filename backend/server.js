const express = require('express');

const app = express();

app.post('/register', (req, res) => {
  res.send('Hello Register!');
});

app.get('/login', (req, res) => {
    res.send('Hello Login!');
  });


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
