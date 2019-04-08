const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const value = 5;
  res.send('Hello Karn')
});

app.listen(3000, () => {
  console.log("Express server started on port 3000.");
});
