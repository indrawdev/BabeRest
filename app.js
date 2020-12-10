import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const port = 3000
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

await mongoose.connect('mongodb://localhost:27017/myapp')
   .then(() => { 
      app.listen(port, () => {
         console.log(`Server is running on port | ${port}.`)
      })
   })
   .catch(err => {
      console.log(err)
   })