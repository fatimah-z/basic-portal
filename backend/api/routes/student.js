var express = require('express');
var router = express.Router();

const Assignmet = require('../models/assignment');
const attempted = require('../models/attemptedAssignment');
const Quiz = require('../models/quiz');
const AttemptedQuiz = require('../models/attemptedQuiz');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  
router.get('/viewassignment/:aid',function(req,res,next){
  Assignmet.findOne({_id:req.params.aid}).exec(function(err,resp){
    if(err){
      next(err);
    }
    res.json(resp.content);
  })
});  
router.post('/submitassignment/:aid/student/:sid',function(req,res,next){
    var assignment_ = new attempted({
      student: req.params.sid,
      Assignment: req.params.aid,
      file: req.body.file,
    })
    try{
      assignment_.save();
      res.status(201).json(assignment_);
  }catch(err){
      res.status(500).json("fail");
  }
  }); 

router.get('/viewmarks/:aid/student/:sid',function(req,res,next){
    attempted.findOne({"Assignment":req.params.aid,"student":req.params.sid}).exec(function(err,resp){
      if(err){
        next(err);
      }
     res.json(resp);
    });
  });  


  router.get('/viewquiz/:qid',function(req,res,next){
    Quiz.findOne({_id:req.params.qid}).exec(function(err,resp){
      if(err){
        next(err);
      }
      res.json(resp.content);
    })
  }); 
  
  router.put('/submitquiz/:qid/student/:sid',function(req,res,next){
    var quiz_ = new AttemptedQuiz({
      student: req.params.sid,
      quiz: req.params.qid,
      file: req.body.file,
    })
    try{
      quiz_.save();
      res.status(201).json(quiz_);
  }catch(err){
      res.status(500).json("fail");
  }
  }); 
  module.exports = router;