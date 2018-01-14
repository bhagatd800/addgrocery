const jsonfile = require('jsonfile'),
    path = require('path'),
    {groceryCategory}=require('./models/groceryCategory'),
    {groceryStores}=require('./models/groceryStores'),
    {groceryStoresProduct}=require('./models/groceryStoresProduct'),
    {grocerySubcategory}=require('./models/grocerySubcategory'),

    file = path.join(__dirname, '../../new-data/new-data.json'),
    _=require('lodash'),
    mongoose=require('mongoose')
function addItem(item) {
    return new Promise((response, reject) => {
        calendarSchema(item).save()
            .then(res => response(res))
            .catch(err => reject(err));
    });
}

function dataReader(file) {
    return new Promise((response, reject) => {
        jsonfile.readFile(file, (err, obj) => {
            if (err != null) {
                reject(err);
            } else {
                response(obj);
            }
        });
    });
}

const groceryproduct = async() => {
  try{
    var datas=await dataReader(file)
    if(datas){
      var retailer=await groceryStores.findOne({_id:datas.retailerId})
      console.log(retailer)
      if(retailer){
        for(i=0;i<=datas.data.length;i++){
          var data=datas.data[i]
          console.log(typeof(data.price))
          console.log(i)
          var category=await groceryCategory.findOne({retailerid:mongoose.Types.ObjectId(retailer._id),name:data.category})
          if(category){
            var subcategory=await grocerySubcategory.findOne({categoryId:mongoose.Types.ObjectId(category._id),name:data.subcategory})
            if(subcategory){
              var newGroceryStoresProduct=new groceryStoresProduct({
                subcategoryId:subcategory._id,
                categoryId:category._id,
                name:data.name,
                price:data.price,
                image:data.image
              })
              var result3=await newGroceryStoresProduct.save()
              //console.log(result3)
            }else{
              var newSubCategory=new grocerySubcategory({
                categoryId:category._id,
                name:data.subcategory
              })
              var result2=await newSubCategory.save()
              var newGroceryStoresProduct=new groceryStoresProduct({
                subcategoryId:result2._id,
                categoryId:category._id,
                name:data.name,
                price:data.price,
                image:data.image
              })
              var result4=await newGroceryStoresProduct.save()
            }
          }else{
            var newCategory=new groceryCategory({
              retailerid:retailer._id,
              name:data.category
            })
            var result=await newCategory.save()
            var newSubCategory=new grocerySubcategory({
              categoryId:result._id,
              name:data.subcategory
            })
            result1=await newSubCategory.save()
            var newGroceryStoresProduct=new groceryStoresProduct({
              subcategoryId:result1._id,
              categoryId:result._id,
              name:data.name,
              price:data.price,
              image:data.image
            })
            var result5=await newGroceryStoresProduct.save()
          }
        }
      }
      else{
        console.log("retailer not found")
      }
    }
  }catch(err){
    console.log(err)
  }
};

module.exports = groceryproduct;
