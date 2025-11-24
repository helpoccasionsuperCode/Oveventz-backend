const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    type: String,
    date: Date,
    city: String,
    guests: Number,
    budget: Number,
    venuePreference: String,
    services: [String],
    name: String,
    email: String,
    status: {
        type: String,
        default: "pending"
    },
    phoneNo: {
        type: String,
        required: true,
        // match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"]
    },
    priorities: {
        type: Map,
        of: Number,
        default: {}
    },
    specialInstructions: String

}, {
    timestamps: true // This adds createdAt and updatedAt automatically
})

const coustomerEventModel = mongoose.model("customer", customerSchema);

module.exports = coustomerEventModel; 