require('dotenv').config();
require('express-async-errors');

const path=require('path')
const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// routes
app.use('/api/v1', productsRouter);

const __dirnam = path.resolve()
if (process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirnam, '/frontend/build')))
  app.get("*", (req,res)=> res.sendFile(path.resolve(__dirnam,'frontend','build', 'index.html')))
}

// products route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI).then(()=>{console.log('connected');});
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
