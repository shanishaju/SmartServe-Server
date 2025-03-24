const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const menuSchema = new mongoose.Schema({
    menuName: {
        type: String,
        required: true
    },
    items: [itemSchema]
});

module.exports = mongoose.model("menus", menuSchema);
