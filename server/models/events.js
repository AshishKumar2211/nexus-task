import mongoose, {Schema, model, types} from "mongoose";

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
      },
    message: {
        type: String,
        required: true
    },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
