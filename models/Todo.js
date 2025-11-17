const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
    {title:{
        type:String,
        required: [true,"title is required"],
        minlength :[3,"title must be atleast 3 characters long"],
        trim: true,
    },
    completed:{
        type:Boolean,
        default:false,
    },
},
{
    timestamps:true,
}
);
module.exports = mongoose.model("Todo",todoSchema);                                      
