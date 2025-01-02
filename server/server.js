const dotenv = require('dotenv');
const express = require('express')
const app = express();
const transationRouter = require("./routes/transation.route");

app.use(express.json())

dotenv.config();
const port = process.env.NODE_PORT | 5002;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/transation',transationRouter)

app.listen(port, () => {
  console.log(`server running....${port}`);
})




