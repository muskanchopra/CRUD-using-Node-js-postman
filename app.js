const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const userRoutes = require('./routes/user');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });

app.use(express.json());

app.use(bodyparser.urlencoded({ extended:true }));

app.use("/api/users", userRoutes);
// const auth = require('./routes/auth');

dotenv.config({path: 'config/config.env'});

// app.use('/api/auth', auth);

module.exports = app;
