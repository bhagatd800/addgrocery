const mongoose = require('mongoose');

var groceryStoresProductSchema = new mongoose.Schema({
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'grocerySubcategory',
        required: true
    },
      categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'groceryCategory',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    description : {
        type: String
    },
    price : {
        type : String
    },
    productDiscount: {
        type: String
    },
    discountType: {
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

var groceryStoresProduct = mongoose.model('groceryStoresProduct', groceryStoresProductSchema);

module.exports = {
    groceryStoresProduct
};
