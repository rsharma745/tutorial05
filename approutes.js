var express = require('express');
var ObjectId = require('mongodb').ObjectID;
var mongojs = require('mongojs');
var router = express.Router();

var db = mongojs("mongodb+srv://cluster0.ywmt1.mongodb.net/Hotelmanagement?retryWrites=true&w=majority"); //db connection
// mongodb+srv://mlab_user:<password>@cluster0.7mq9h.mongodb.net/SchoolManagement?retryWrites=true&w=majority
//reading data
router.get('/get', (req, res) => {
    db.student.find({}, (err, msg) => {
        if (!err) {
            res.status(200).json({
                message: msg
            })
        } else {
            res.status(500).json({
                message: err
            });
        }
    });
})

//localhost://3000/
//adding data

router.post('/staff', (req, res) => {

    db.hotel_staff.save({
        name: req.body.s_name,
        post: req.body.s_post
    }, (err, msg) => {
        if (!err) {
            res.status(200).json({
                message: msg
            });
        } else {
            res.status(500).json({
                message: err
            });
        }
    });

});


// //updating records
router.put('/staff',(req,res)=>{
    
    db.student.update({_id:ObjectId(req.body._id)},{$set:{name:req.body.s_name,post:req.body.s_post}},(err,msg)=>{
        if (!err) {
            res.status(200).json({
                message: msg
            });
        } else {
            res.status(500).json({
                message: err
            });
        }
    })
})



// //deleting records
router.delete('/delete/:id', (req, res, next) => {
    console.log("deelete");
    var t = req.params.id.toString()
    console.log(t);
    
    db.hotel_staff.remove({ _id: ObjectId(t) }, (err, msg) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json({ msg: msg });
        }
    });
});




module.exports = router;