# subscriptions-api<br/>
This is a sample subscriptions microservice api for #team-gold in HNGi7 by @clish<br/>
##**Do this before testing it**<br/>
*Install mongodb in your machine, find a guide here (https://docs.mongodb.com/manual/installation/)<br/>
*Instal nodejs<br/>
*Install the app's dependencies <pre><code>npm install</pre></code>
##**To run the app** <br/>
node run server.js<br/>
##**endpoints**<br/>
*GET /api/subscribers: will give all subscribers stored in database and their ids.<br/>
*GET /api/subscribers/<subscriber_id>: will give a specific subscriber with subscriber_id.<br/>
*POST /api/subscribers : create a new subscriber<br/>
*PATCH /api/subscribers/<subscriber_id>: update a subscriber partially //i've not tested this yet,will update later<br/>
*DELETE /api/subscribers/<subscriber_id>: delete a subscriber<br/>
*PUT /api/subscribers/<subscriber_id>: update a subscriber completely<br/>

subscriber schema = {
    first_name:String,
    last_name:String,
    email:String,
    plan:String
}
