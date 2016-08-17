//require twit library
var Twit = require('twit'),
	config = require('./config'),
	T = new Twit(config);
// search for the following

trollAle();
setInterval(trollAle, 1000*60);

function trollAle (){
   var randomNumber = Math.floor(Math.random()*(1000-1));
   T.post('statuses/update', { status: ' Sabían que @basicavisual se llama https://goo.gl/ThosxD ' + randomNumber }, function(err, data, response) {
      console.log(data)
   })

}
