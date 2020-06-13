const  express = require('express');

const bodyParser = require('body-parser');

const dotenv = require("dotenv");

const cors = require('cors');

const app = express();
//setup server port;
const port = process.env.Production || 3000;
// parse all requests of content-type - application/x-www-form-urlencoded & content-type - application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//enabling cors for all requests
app.use(cors());

dotenv.config();

const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false}).then(()=>{
        console.log("Successfully connected to our database");
    }).catch(err => {
        console.log('Could not connect to the database.',err);
        process.exit();
    })

//default route
app.get('/',(req,res)=>{
    res.json({"message":"Hello World"});
});

//require Subscribers routes
const subscriberRoutes = require('./src/routes/subscriber.routes');
//import other routes
//import routes
const authRoute = require('./src/routes/auth');
const postRoute = require('./src/routes/posts');
const docsRoute = require('./src/routes/documentation');
const configRoute = require('./src/routes/config')

//route middlewares
app.use('/v1/user',authRoute);
app.use('/v1/posts',postRoute);
app.use('/v1/config',configRoute);


//using subscribers routes as a middleware
app.use('/v1/subscribers',subscriberRoutes)

app.listen(port,()=> {
    console.log(`Server listening on port ${port}`)
});
