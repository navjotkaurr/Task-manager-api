const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'                               //Establish a relationship b/w user and tasks

    }
}, {
    timestamps: true                                  //adding second arguments to the object
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task