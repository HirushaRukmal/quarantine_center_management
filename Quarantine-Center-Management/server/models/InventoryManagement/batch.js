const mongoose=require('mongoose');
const schema=mongoose.Schema;

const Batchschema=new schema({
    itemcode:{type:Number,required: true,},
    category:{type:String,required: true,},
    name:{type:String,required: true,},
    price_of_one:{type:Number,required: true,},
    batchnum:{type:Number,required: true,},
    received_date:{type:Date,required: true,},
    expiration_date:{type:Date,required: true,},
    total_quantity:{type:Number,required: true,},
    
});



const batch = mongoose.model("Batch",Batchschema);
module.exports=batch;