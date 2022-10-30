var express = require('express');
var router = express.Router();

const Assignmet = require('../models/assignment');
const attempted = require('../models/attemptedAssignment');
const Quiz = require('../models/assignment');
const AttemptedQuiz = require('../models/attemptedQuiz');
const attemptedQuiz = require('../models/attemptedQuiz');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/addassignment',function(req,res,next){
  Assignmet.create(req.body).then((assignment)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(assignment);
  },(err)=>next(err))
  .catch((err) => next(err));
});

router.get('/viewattemptedassignment/:aid/student/:sid',function(req,res,next){
  attempted.findOne({"Assignment":req.params.aid,'student':req.params.sid}).exec(function(err,response){
    if(err){
      next(err);
    }
    
    res.json(response);
  })
});

router.get('/viewAllattemptedassignment/:aid',function(req,res,next){
  attempted.findOne({"Assignment":req.params.aid}).exec(function(err,response){
    if(err){
      next(err);
    }
    
    res.json(response);
  })
});

router.patch('/addassignmentmarks/:aid/student/:sid',function(req,res,next){
attempted.findOneAndUpdate({"Assignment":req.params.aid,"student":req.params.sid},{
    
      "marks" : req.body.marks
    
  },{new:true, upsert:false},function(err,updatedassign){
    if(err){
      return next(err);
    }
    res.json(updatedassign);
  });
});

router.patch('/updateassignmentmarks/:aid/student/:sid',function(req,res,next){
  attempted.findOneAndUpdate({"Assignment":req.params.aid,'student':req.params.sid},{
      
        "marks" : req.body.marks
      
    },{new:true, upsert:false},function(err,updatedassign){
      if(err){
        return next(err);
      }
      res.json(updatedassign);
    });
  });

  router.delete('/delassignment/:aid',function(req,res){
    Assignmet.deleteOne({_id: req.params.aid},function(err,resp){
      if(err){
        return next(err);
      }
      res.json(resp);
    })
  });

router.post('/addquiz',function(req,res,next){
  Quiz.create(req.body).then((assignment)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(assignment);
  },(err)=>next(err))
  .catch((err) => next(err));
});

router.get('/viewattemptedQuiz/:qid/student/:sid',function(req,res,next){
  AttemptedQuiz.findOne({"quiz":req.params.qid,'student':req.params.sid}).exec(function(err,response){
    if(err){
      next(err);
    }
    res.json(response);
  })
});

router.patch('/addquizmarks/:qid/student/:sid',function(req,res,next){
  attemptedQuiz.findOneAndUpdate({"quiz":req.params.qid},{
     
        "marks" :req.body.marks
        
    },{new:true, upsert:false},function(err,updatedassign){
      if(err){
        return next(err);
      }
      res.json(updatedassign);
    });
  });
module.exports = router;
  