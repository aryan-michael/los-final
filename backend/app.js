const cors = require("cors")
const express = require("express");
const app = express();
const connectDb = require('./database/connectDb'); 
require('dotenv').config()
require('express-async-errors')
const port = process.env.PORT || 5000;
const authRoute = require('./routes/authRoutes')
const loanRoute = require('./routes/loanRoutes')
const bankRoute = require('./routes/bankAccountRoutes')
const proxyUserRoute = require('./routes/proxyUserRoutes')
const fileUploadRoute = require('./routes/fileUploadRoutes')
const userDocumentsRoute = require('./routes/userDocumentsRoutes')
const adminRoute = require('./routes/adminRoutes')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
require('dotenv').config() //To access .env file
const notFoundMiddleware = require('./Middleware/NotFound');
const errorHandlerMiddleware = require('./Middleware/ErrorHandler')
const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})

const corsOrigin = {
  origin:'http://localhost:3000', //or whatever port your frontend is using
  credentials: true,
  withCredentials: true
}
app.use(fileUpload({
  useTempFiles : true
}))
app.use(cors(corsOrigin));
app.use(morgan("tiny"));
app.use(express.urlencoded())
app.use(cookieParser())
app.use(express.json()) //For printing json data 

app.use(bodyParser.urlencoded({ extended: false }));



// app.get("/", function(req, res) {
//   res.send(Quote.getQuote());
//   const eg = Quote.getQuote();
//   console.log(eg)
// });


app.use('/api/v1/user', authRoute);
app.use('/api/v1/loan', loanRoute)
app.use('/api/v1/bank', bankRoute)
app.use('/api/v1/proxyUser', proxyUserRoute)
app.use('/api/v1/file', fileUploadRoute)
app.use('/api/v1/user/document',userDocumentsRoute)
app.use('/api/v1/admin',adminRoute)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)

//This function checks whether the connection with the database is made successfully or not
//If the connection is made successfully then the server will start running or else it will return error
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening at ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()