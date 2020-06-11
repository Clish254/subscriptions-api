const  express = require('express');

const bodyParser = require('body-parser')

const cors = require('cors');

const helmet = require('helmet');

const morgan = require('morgan');

const app = express();
//setup server port;
const port = process.env.Production || 3000;
// parse all requests of content-type - application/x-www-form-urlencoded & content-type - application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//enabling cors for all requests
app.use(cors());

// adding Helmet to enhance our API's security
app.use(helmet());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

//configuring the database
const dbConfig = require('./config/db.config.js')

const mongoose = require('mongoose');

mongoose.connect(dbConfig.url,{useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false}).then(()=>{
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

//using subscribers routes as a middleware
app.use('/api/subscribers',subscriberRoutes)

app.listen(port,()=> {
    console.log(`Server listening on port ${port}`)
});
