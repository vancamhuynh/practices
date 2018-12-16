const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello Van!!'))

app.listen(port, () => console.log(`Example app listen in port ${port}!!!`))

// var mongoAtlas = 'mongodb+srv://vanhuynh:Oldman1908@cluster0-buffa.mongodb.net/admin'
// var mongoAtlas = 'mongodb+srv://andyluu:oldman1908@cluster0-buffa.mongodb.net/admin'
var mongoAtlas = 'mongodb+srv://vanhuynh:Oldman1908@cluster0-buffa.mongodb.net/test?retryWrites=true'
 mongoose.connect(mongoAtlas, function(error) {
   if(error) throw error;


   var db = mongoose.connection;
   db.on('error', console.error.bind(console, 'MongoDB connect error!!!'))

   console.log("connect DB successfully!!");
   var Schema = mongoose.Schema;
   var studentSchema = new Schema({
     id: Number,
     name: String
   })

   var studentModel = mongoose.model('studentModel', studentSchema)

   var student = new studentModel({
     id: 123,
     name: "Vicky"
   })

   console.log("start saving students");

   student.save(function(error, student) {
     console.log("===this is save===");
     if (error) throw (error)
     console.log('finish created student, now search')
     console.log(student);

     studentModel.find({id: 123}, (error, student) => {
       if (error) console.error(error)
       if (student) console.log(`found: ${student}`)
       mongoose.connection.close()
     });


 })
})
