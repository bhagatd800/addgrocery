const mongoose = require('mongoose');

var groceryCategorySchema = new mongoose.Schema({
    retailerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'groceryStores',
        required: true
    },
    name: {
        type: String,
        required: true
    },
   
    image: {
        type: String
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

var groceryCategory  = mongoose.model('groceryCategory', groceryCategorySchema);

module.exports = {
    groceryCategory
};
