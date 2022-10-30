var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function(req,res,next){
  authorizeHeader = req.headers.authorization
  if(!authorizeHeader){
    var error = new Error("you are not authenticated1");
    res.setHeader('WWW-Authenticate', 'Basic')
    res.status(401);
    next(err);
  }
  var auth = new Buffer.from(authorizeHeader.split(' ')[1],'base64').toString().split(':');
  var username = auth[0];
  var password = auth[1];
  console.log("user"+username);
  console.log("pass"+password);
      if(username=='fatima' && password=='fatima123'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('You are authenticated!')
    }
    else{
        var err = new Error("Your are not authenticated2");
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        next(err);
    }

})
module.exports = router;
