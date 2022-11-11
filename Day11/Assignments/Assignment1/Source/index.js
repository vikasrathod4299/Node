const express = require('express')
const app = express();
app.disable('x-powered-by');
const mongooos = require('mongoose')
app.disable('x-powered-by');

const studentRoute = require('./routes/studentRoute/student')
const employeeRoute = require('./routes/employeeRoute/employee')
const authRoute = require('./routes/authentication/auth')
const {verifyToken} = require('./routes/authentication/verifyToken')

app.use(express.json())

mongooos.connect('mongodb://localhost:27017/test')
.then(()=>console.log("DB connected"))
.catch((err)=> console.log(err))

app.use('/auth',authRoute)

app.use(verifyToken)
app.use('/student',studentRoute)
app.use('/employee',employeeRoute)

app.listen(3000,()=> console.log('alive on port 3000'))



