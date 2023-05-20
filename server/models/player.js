const mongoose=require('mongoose');
const playerSchema= new mongoose.Schema({

    name:{
        type:String,
        required: 'this is required.'

    },
    image:{
        type:String,
        required: 'this is required.'

    },
});
module.exports= mongoose.model('player',playerSchema);