var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var quizSchema = new Schema({
    name: {
        type: String,
        ref: 'class'
    },
    class: {
        type: mongoose.Types.ObjectId,
        ref: 'class'
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Quiz', quizSchema);