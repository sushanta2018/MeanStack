const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const eventSchema = new Scheme({
    title: String,
    description: String,
    type: String
});

module.exports = mongoose.model('event', eventSchema, 'event');