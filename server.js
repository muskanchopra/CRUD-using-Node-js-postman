const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
// const cloudinary = require('cloudinary');

//Handling uncaught exceptions
// process.on('uncaughtException',essage}`);
//     console.log('Closing serve err =>{
//     console.log(`Error: ${err.mr due to uncaught exceptions');
//     process.exit(1);
// })


//setting up config 
dotenv.config({path: 'config/config.env'});

//connecting to database
connectDatabase();
const server = app.listen(process.env.PORT, () =>{
    console.log(`server started at port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

//Handling unhandled Promise rejections

// process.on('unhandledRejection', err =>{
//     console.log(`Error: ${err.message}`);
//     console.log('Closing server due to unhandled promises rejection');
//     server.close(()=>{
//         process.exit(1)
//     })
// }