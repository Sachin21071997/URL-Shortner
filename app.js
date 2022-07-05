const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3002;
app.use(express.json());
app.use(cors());
// Database config
const connection = require('./config/config')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))
app.use('/api/urls', require('./routes/urls'))
app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});
