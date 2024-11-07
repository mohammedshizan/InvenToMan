const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');


dotenv.config({
    path: './env'
})

const app = express()

connectDB()
.then(() => {
  app.listen(process.env.PORT || 1000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("MONGODB Connection Failed !!", err);
});

app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );


app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));




