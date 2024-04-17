import {Schema, model} from 'mongoose';

const taskSchema = new Schema({
    task: { type: String, required: true },
});

module.exports = model('Task', taskSchema);
