var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var classSchema = new Schema({
    name:{
        type:String,required:true
    },
    teacher:{
        type:mongoose.Types.ObjectId,
        ref:"teacher"
    },
    student:{
        type:[{
            sid:{
            type:mongoose.Types.ObjectId,
            ref:"student"
        }
        }]
    }
});

module.exports = mongoose.model("Class",classSchema);

