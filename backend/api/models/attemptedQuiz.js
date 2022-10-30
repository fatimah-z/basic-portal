var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var attemptedQuizSchema = new Schema({
    student: {
        type: mongoose.Types.ObjectId,
        ref: 'student'
    },
    quiz: {
        type: mongoose.Types.ObjectId,
        ref: 'quiz'
    },
    file: {
        type: String
            
    },
    marks:{
        type: Number
    }
});

module.exports = mongoose.model('attemptedquiz', attemptedQuizSchema);