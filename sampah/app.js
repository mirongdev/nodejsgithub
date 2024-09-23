const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Routing sederhana
app.get('/', (req, res) => {
  res.send('Hello, this is a Node.js app deployed using GitHub Actions!');
});

// Aplikasi berjalan di port 3000 atau sesuai dengan PORT environment variable
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
