var express = require('express');
const Teacher = require('../models/teacher');
const Student = require('../models/student');
const Class = require('../models/class');
var router = express.Router();

/* GET users listing. */
router.get('/students',function(req,res,next){
    Student.find({}).then((studentList)=>{
        console.log(studentList);
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(studentList);

    },(err)=> next(err));
});
router.get('/teachers',function(req,res,next){
    Teacher.find().sort('name').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);

    },(err)=> next(err))
    
});
router.get('/teachers/:id',function(req,res,next){
    Teacher.findById(req.params.id).then((teacher)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(teacher);
    },(err)=> next(err))
    .catch((err)=>next(err));
});

router.get('/students/:id',function(req,res,next){
    Student.findById(req.params.id).then((student)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(student);
    },(err)=> next(err))
    .catch((err)=>next(err));
});

router.get('/class/:id',function(req,res,next){
    Class.findById(req.params.id).populate('teacher').populate('student.sid')
    .then((data)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(data);
    },(err)=> next(err))
    .catch((err)=>next(err));

    // Class.find({ _id: req.params.id }).populate('teacher').populate('student.sid').exec(function(error, results) {
    //     if (error) {
    //         return next(error);
    //     }
    //     // Respond with valid data
    //     res.json(results);
    // });
})

router.post('/addteacher',function(req,res,next){
    Teacher.create(req.body).then((teacher)=>{
        console.log('teacher has been added',teacher);
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(teacher);
    }, (err)=> next(err))
    .catch((err)=>next(err));
});
router.post('/addclass',function(req,res,next){
    Class.create(req.body)
        .then((result) => {
            console.log('Class has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
}
);

router.post('/addstudent', function(req, res, next) {
    Student.create(req.body)
        .then((student) => {
            console.log('Student has been Added ', student);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(student);
        }, (err) => next(err))
        .catch((err) => next(err));
});

router.put('/assign/:cid/Student/:sid', function(req, res, next) {
    Class.findOneAndUpdate({ _id: req.params.cid }, {
            "$push": {
                "student": {
                    "sid": req.params.sid
                }
            }
        }, { new: true, upsert: false },
        function(error, results) {
            if (error) {
                return next(error);
            }
            // Respond with valid data
            res.json(results);
        });
});


module.exports = router;
