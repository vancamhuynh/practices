const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Van!!'))

app.listen(port, () => console.log(`Example app listen in port ${port}!!!`))

// var mongoAtlas = 'mongodb+srv://vanhuynh:<Oldman1908>@cluster0-buffa.mongodb.net/test?retryWrites=true'
var mongoAtlas = 'mongodb+srv://vanhuynh:<Oldman1908>@cluster0-buffa.mongodb.net/admin'

mongoose.connect(mongoAtlas, { useNewUrlParser: true })

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connect error!!!'))

// var Schema = mongoose.Schema;
//
// var studentSchema = new Schema({
//   id: Number,
//   name: String
// })
//
// var studentModel = mongoose.model('studentModel', studentSchema)
//
// var student = new studentModel({
//   id: 123,
//   name: "Vicky"
// })

// student.save(error => {
//   if (error) console.error('Cannot save student!!!')
// });
//
// console.log('finish create student, now search')

// studentModel.find({id: 123}, (error, student) => {
//   if (error) console.error(error)
//   if (student) console.log(`found: ${student}`)
// })

mongoose.connection.close()
