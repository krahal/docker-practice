const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello Karn'));

app.listen(3000, () => {
  console.log("Express server started on port 3000.");
})