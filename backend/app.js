const cors = require("cors")
const express = require("express");
const app = express();
const connectDb = require('./database/connectDb'); 
const statementRoute = require('./routes/statementRoute'); 
const formroute = require('./routes/formRoutes')
require('dotenv').config() //To access .env file


app.use(express.json()) //For printing json data 
app.use(cors());


// app.get("/", function(req, res) {
//   res.send(Quote.getQuote());
//   const eg = Quote.getQuote();
//   console.log(eg)
// });



app.use('/', statementRoute) //Assigning routes
app.use('/form',formroute)
const port = process.env.PORT || 5000;


// if(!port) {
//  port = 5000;
// }
// app.listen(port, function() {
//  console.log("Server started successfully");
// });



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