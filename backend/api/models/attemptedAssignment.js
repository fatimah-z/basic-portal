var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var attemptedAssignmentSchema = new Schema({
    student: {
        type: mongoose.Types.ObjectId,
        ref: 'student'
    },
    Assignment: {
        type: mongoose.Types.ObjectId,
        ref: 'assignment'
    },
    file: {
        type: String
            
    },
    marks:{
        type: Number
    }
});

module.exports = mongoose.model('attemptedAssignment', attemptedAssignmentSchema);