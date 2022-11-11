const express = require('express')
const app = express();
app.disable('x-powered-by');
app.disable('x-powered-by');
const studentRoute = require('./routes/studentRoute/student')
const employeeRoute = require('./routes/employeeRoute/employee')
const authRoute = require('./routes/authentication/auth')
const {verifyToken} = require('./routes/authentication/verifyToken')
const mongooos = require('mongoose')
const userModel = require('./Models/userDB')

mongooos.connect('mongodb://localhost:27017/test')
.then(()=>console.log("DB connected"))
.catch((err)=> console.log(err))

app.use(express.json())

app.use('/auth',authRoute)

app.use(verifyToken)
app.use('/student',studentRoute)
app.use('/employee',employeeRoute)

app.listen(3000,()=> console.log('alive on port 3000'))



