
const mongoose=require('mongoose');
const membersSchema= new mongoose.Schema({

    name:{
        type:String,
        required: 'this is required.'

    },
    description:{
        type:String,
        required: 'this is required.'

    },
    country:{
        type:String,
        required: 'this is required.'

    },
    team:{
        type:String,
        required: 'this is required.'

    },
    category:{
        type:String,
        enum:['batsman','bowler','wicker keeper','couch','all-rounder'],
        required: 'this is required.'

    },
    image:{
        type:String,
        required: 'this is required.'

    },
    birth:{
        type:String,
        required: 'this is required.'

    },
    height:{
        type:String,
        required: 'this is required.'

    },




});

membersSchema.index({name:'text', category:'text' });



module.exports= mongoose.model('members',membersSchema);