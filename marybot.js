//require twit library
var Twit = require('twit'),
	config = require('./config'),
	T = new Twit(config);

//call function once
trollAle();
//then call it every minute (1000ms*60 = 60 seconds)
setInterval(troll, 1000*60);

//twit function
function troll (){
	//we need a random number because we can't have the exact same tweet twice
   var randomNumber = Math.floor(Math.random()*(1000-1));
	//here we compose the tweet (in this case I'm tweeten my friend's 'secret' name)
   T.post('statuses/update', { status: ' Sabían que @basicavisual se llama https://goo.gl/ThosxD ' + randomNumber }, function(err, data, response) {
      console.log(data)
   })
}
