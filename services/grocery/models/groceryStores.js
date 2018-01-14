const mongoose = require('mongoose');

var groceryStoresSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },   
    image: {
        type: String
    },
    description: {
        type: String
    },
    zipcode : {
        type: Number,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    updateDate: {
        type: Date,
        default: Date.now
    },
    status: {
      type: Boolean,
      default: true
    }
});

var groceryStores  = mongoose.model('groceryStores', groceryStoresSchema);

module.exports = {
    groceryStores
};
