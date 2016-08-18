//require twit library
var Twit = require('twit'),
	config = require('./config'),
	T = new Twit(config);

//call function once
trollAle();
//then call it every minute
setInterval(trollAle, 1000*60);

//twit function
function trollAle (){
   var randomNumber = Math.floor(Math.random()*(1000-1));
   T.post('statuses/update', { status: ' Sabían que @basicavisual se llama https://goo.gl/ThosxD ' + randomNumber }, function(err, data, response) {
      console.log(data)
   })

}
