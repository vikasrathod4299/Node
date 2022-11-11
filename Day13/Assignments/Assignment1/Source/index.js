const express = require('express');
const app = express();
const mongoos = require('mongoose');
const paitent = require('./Model/paitent');
const authRoute = require('./routes/auth')
const docterRoute = require('./routes/docterRoute')
const drugModel = require('./Model/drugModel')
const docterModel = require('./Model/departmentModel');
const userModel = require('./Model/userModel');
app.use(express.json())

app.get('/report', async(req,res)=>{
            let data = await paitent.find({'docter.docID':'636cdfa842831dcae6f170aa'})
            .populate({path:'departmentID madicine.morning.drugId madicine.afternoon.drugId madicine.evening.drugId',select:'name -_id'})
            .populate({path:'docter.docId',select:'name -_id',populate:{path:'departmentID',select:'name -_id'}})
            .select('name -_id')
            res.json(data[0]);
            console.table(data[0]);
})





mongoos.connect('mongodb://localhost:27017/hospital')
.then(()=>console.log('DB connected'))
.catch((err)=>console.log(err))

app.use('/auth',authRoute);
app.use('/docter', docterRoute);

app.listen(3000,()=>console.log("It's alive on port 3000"));