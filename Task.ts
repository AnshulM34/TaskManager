import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    task: { type: String, required: true },
});

module.exports = mongoose.model('Task', taskSchema);
