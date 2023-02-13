const cors = require("cors")
const express = require("express");
const app = express();
require('express-async-errors')
const connectDb = require('./database/connectDb'); 
require('dotenv').config()
const port = process.env.PORT || 5000;
const statementRoute = require('./routes/statementRoute'); 
const formroute = require('./routes/formRoutes')
const authRoute = require('./routes/authRoutes')
const personalDetailRoute = require('./routes/personalDetailRoutes')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
require('dotenv').config() //To access .env file
const notFoundMiddleware = require('./Middleware/NotFound');
const errorHandlerMiddleware = require('./Middleware/ErrorHandler')


app.use(morgan());
app.use(express.urlencoded())
app.use(cookieParser())
app.use(express.json()) //For printing json data 
app.use(cors());


// app.get("/", function(req, res) {
//   res.send(Quote.getQuote());
//   const eg = Quote.getQuote();
//   console.log(eg)
// });



app.use('/', statementRoute) //Assigning routes
app.use('/form', formroute)
app.use('/api/v1/user', authRoute);
app.use('/api/v1/personal-detail', personalDetailRoute)

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