var express = require('express');
var router = express.Router();

const attemptedAssignment = require('../models/attemptedAssignment');
const Class = require('../models/class');

  
  router.get('/classes',function(req,res,next){
    Class.find().sort('name').exec(function(error, results) {
      if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
    
  },(err)=> next(err))
});

router.get('/class')
// router.get('/assignments/class/:id',function(req,res,next){
//   Assignment.find({class:req.params.id}).exec(function(err,response){
//     if(err){
//       return next(err);
//     }
//     res.json(response);
//   });
// });

module.exports = router;