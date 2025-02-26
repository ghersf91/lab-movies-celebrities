const { Schema, model } = require('mongoose');

const celebritySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        occupation: {
            type: String,
            required: true
        },
        catchPhrase: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('Celebrity', celebritySchema)


