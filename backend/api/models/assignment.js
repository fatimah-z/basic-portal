var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var assignSchema = new Schema({
    class: {
        type: mongoose.Types.ObjectId,
        ref: 'class'
    },
    content: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Assignment', assignSchema);