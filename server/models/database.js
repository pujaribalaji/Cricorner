const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect('mongodb://MONGODB_URI/cricket', { useNewUrlParser: true });


const db= mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',function(){
    console.log('connected')
});

require('./Category');
require('./player');
require('./members');

