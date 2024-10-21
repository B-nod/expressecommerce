// Importing the Express library, which is a web framework for Node.js
const express = require('express')

// Creating an instance of an Express application
const app = express()

// Importing the 'dotenv' library, which allows loading environment variables 
// from a '.env' file into the `process.env` object.
require('dotenv').config()


app.use('/', (req,res)=>{
      res.json({'message':'This is a express server'})
})

// Defining the port the server will listen on.
// The `process.env.PORT` reads the 'PORT' environment variable, which could 
// be defined in a '.env' file or the system environment.
// If it's not set, it will default to port 5000 (due to the '|| 5000' part).
const port = process.env.PORT || 5000

// Starting the server and making it listen on the defined port.
// The `listen()` method takes the port and a callback function.
// When the server starts, the callback function is executed, 
// logging a message to the console.
app.listen(port, () => {
    // This log confirms that the server has started and tells you which port 
    // it's running on, based on the value of `port`.
    console.log(`Server started on port ${port}`)
})


