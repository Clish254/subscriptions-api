# subscriptions-api
This is a sample subscriptions microservice api for #team-gold in HNGi7 by @clish
**Do this before testing it**
1)Install mongodb in your machine, find a guide here https://docs.mongodb.com/manual/installation/
2)Instal nodejs
**To run the app** 
node run server.js
**endpoints**
GET /api/subscribers: will give all subscribers stored in database and their ids.
GET /api/subscribers/<subscriber_id>: will give a specific subscriber with subscriber_id.
POST /api/subscribers : create a new subscriber
PATCH /api/subscribers/<subscriber_id>: update a subscriber partially //i've not tested this yet,will update later
DELETE /api/subscribers/<subscriber_id>: delete a subscriber
PUT /api/subscribers/<subscriber_id>: update a subscriber completely

subscriber schema = {
    first_name:String,
    last_name:String,
    email:String,
    plan:String
}
