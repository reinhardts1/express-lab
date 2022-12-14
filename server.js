// import modules

import express from 'express'

import { students } from './data/students-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)



// Mount routes



app.get('/', function(req, res) {
  res.send('<h1>hello, friend</h1>')
})

app.get('/waffles', function(req, res) {
  res.send('<p> I really love waffles!</p>')
})

app.get('/pandas', function(req, res) {
  res.redirect('/home')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/students', function(req, res) {
  res.render('students/index', {
    students: students
  })
})

app.get('/', function(req, res) {
  res.redirect('/home')
})


// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})