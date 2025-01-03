const dotenv = require('dotenv');
const express = require('express')
const app = express();
const cors = require('cors')
const transationRouter = require("./routes/transation.route");
const statasticsRouter = require("./routes/statistics.route");
const barChartRouter = require("./routes/barChartData.route");
const allTransationRouter = require("./routes/allTransaction.route");
const transactionSearchRouter = require("./routes/transactionSearch.route");
const pichartRouter = require("./routes/piechart.route");
const connectDB = require('./config/dbConnection');

app.use(cors())
app.use(express.json())

dotenv.config();
const port = process.env.NODE_PORT | 5002;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/transation',transationRouter)
app.use('/api/v1/statastics',statasticsRouter)
app.use('/api/v1/barchart',barChartRouter)
app.use('/api/v1/alltransation',allTransationRouter)
app.use('/api/v1/transactionSearch',transactionSearchRouter)
app.use('/api/v1/piechart',pichartRouter)

connectDB().then(()=>{
  app.listen(port, () => {
    console.log(`server running....${port}`);
  })
}).catch((error)=>{
  console.log(error);
  
})




