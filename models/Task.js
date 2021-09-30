const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name: {
       type: String,
       required: [true, 'must provide name'],
       trim: true,
       maxlength: [30, 'name must not exceed 30 characters'],
       minlength: [3, 'name must not be less than 3 characters']
    },
    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model("Task", TaskSchema);