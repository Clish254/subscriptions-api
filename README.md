# subscriptions-api<br/>
This is a sample subscriptions microservice api for #team-gold in HNGi7 by @clish<br/>
##**Do this before testing it**<br/>
*Install mongodb in your machine, find a guide here (https://docs.mongodb.com/manual/installation/)<br/>
*Instal nodejs<br/>
*Install the app's dependencies <pre><code>npm install</pre></code>
##**To run the app** <br/>
<pre><code>node run server.js</pre></code><br/>
##**endpoints**<br/>
*POST /v1/user/register : will add user to the database with name,email,and password.<br/>
*POST /v1/user/login : will authenticate a user and respond with an access token which will be added to the headers "auth-token" : "token",this token must be used in order to access other routes.<br/>
*GET /v1/subscribers: will give all subscribers stored in database and their ids.<br/>
*GET /v1/subscribers/<subscriber_id>: will give a specific subscriber with subscriber_id.<br/>
*POST /v1/subscribers : create a new subscriber<br/>
*DELETE /v1/subscribers/<subscriber_id>: delete a subscriber<br/>
*PUT /v1/subscribers/<subscriber_id>: update a subscriber completely<br/>

user schema = {
    name : String,
    email : String,
    password : String
}<br/>
subscriber schema = {
    first_name:String,
    last_name:String,
    email:String,
    plan:String
}
