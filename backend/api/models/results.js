var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var resultSchema = new Schema({
    class:{
        type:mongoose.Types.ObjectId,
        ref:"class"
    },
    student:{
        type:mongoose.Types.ObjectId,
        ref:"student"
    },
    Assignments: {
        type: mongoose.Types.ObjectId,
        ref: "attemptedAssignment"
    },
    Quiz:{
        type: mongoose.Types.ObjectId,
        ref: "attemptedQuiz"

    }
});

module.exports = mongoose.model('Result', resultSchema);