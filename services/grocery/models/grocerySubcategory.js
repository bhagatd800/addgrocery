/*jshint esversion: 6 */

const mongoose = require('mongoose');

var grocerySubcategorySchema = new mongoose.Schema({
	categoryId:{
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
	status: {
      type: Boolean,
      default: true
    }
});

var grocerySubcategory = mongoose.model('grocerySubcategory', grocerySubcategorySchema);

module.exports = {grocerySubcategory};
