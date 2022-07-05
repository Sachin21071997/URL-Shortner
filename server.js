const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});
