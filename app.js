const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require('express-session');
const passport=require('passport');
const MongoStore = require('connect-mongo');


const app= express();
const port = process.env.PORT || 3060;

app.use(passport.initialize());
// app.use(passport.session());

require('dotenv').config();

app.use(express.urlencoded ( { extended : true} ));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout' , './layouts/main');
app.set('view engine', 'ejs');

const routes =require('./server/routes/cricketroute.js')
app.use('/',routes);

const authRoutes = require('./server/routes/auth');
app.use('/', authRoutes);

app.listen(port, ()=> console.log("lestining to port 3020") );