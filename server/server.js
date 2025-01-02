const dotenv = require('dotenv');
const express = require('express')
const app = express();
const transationRouter = require("./routes/transation.route");
const statasticsRouter = require("./routes/statistics.route");

app.use(express.json())

dotenv.config();
const port = process.env.NODE_PORT | 5002;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/transation',transationRouter)
app.use('/api/v1/statastics',statasticsRouter)

app.listen(port, () => {
  console.log(`server running....${port}`);
})




