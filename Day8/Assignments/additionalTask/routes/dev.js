const { devAutherisation } = require('./verifyAuth')
const {db} = require('../db')
const router = require('express').Router()

router.use(devAutherisation)

router.get('/list',(req,res)=>{
    res.status(200).send(db)
})

router.post('/add',(req,res)=>{
    let data = res.body;
    if(data){
        db.push(data)
        res.status(200).json(data)
    }else{
        res.status(404).send("Data dose not found!")
    }
})

module.exports = router;