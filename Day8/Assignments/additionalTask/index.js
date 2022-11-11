const express = require('express')
require('dotenv').config()
const app = express();
app.disable('x-powered-by');
const auth = require('./routes/auth')
const admin = require('./routes/admin') 
const dev = require('./routes/dev')
const { verifyToken } = require('./routes/verifyAuth')

app.use(express.json())

app.use('/',auth)


app.use(verifyToken) 
app.use('/admin',admin)
app.use('/dev',dev)

app.listen(3000,()=>console.log("It's alive on port 3000"))

