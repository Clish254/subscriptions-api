const mongoose = require('mongoose');
const schema = mongoose.Schema;

const SubscriberSchema = new schema({
    first_name:String,
    last_name:String,
    email:String,
    plan:String
});
module.exports = mongoose.model('Subscriber',SubscriberSchema)
