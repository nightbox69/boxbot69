var tmi = require('tmi.js'),
authen = require('./oauth.js'),
options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
    reconnect: true
	},
	identity: {
		username: 'nightbot96', // change this username
		password: authen.password // create an exports.password in oauth.js
	},
	channels: ['#nightbox69']
}
client = new tmi.client(options),
emoteCounter = 0,
intervalEmote = 50,
chatCounter = 0,
intervalChat = 30,
hasConnected = false;
hasPlugged = false;

client.connect();

// client.say("#nightbox69", "");
function shamelessPlug() {
  client.say("nightbox69", "If you guys actually managed to like boss's stream (a statistical impossibility) consider hitting the follow button for more moronic speedruns that will hold no bearing to World Record. Kappa");
};

function twitterPlug() {
  client.action("nightbox69", "is forcibly ordered to tell people to (not) follow his boss at https://twitter.com/nightbox69");
}

function discordPlug() {
  client.say("nightbox69", "Boss has a discord channel. Shame on him. https://discord.gg/y36BCNb");
}

client.on("chat", (channel, user, message, self) => {
	if(channel == "#nightbox69") {
		switch(message.toLowerCase()) {
			case 'nb intro':
				client.say("#nightbox69", "I am the Nightbot96 currently on a limited lifespan until the Boss manages to grab hold of Nightbot69");
				break;
			case 'Kappa':
				emoteCounter = emoteCounter + 1;
				client.say("#nightbox69", "Kappa Counter: " + emoteCounter);
				if(emoteCounter == intervalEmote) {
					client.say("#nightbox69", "It's Raining Kappa (" + emoteCounter + ")");
				}
				break;
			case 'nb riot':
				client.say("#nightbox69", "FUCKING RIOT LET'S GO *throws chairs everywhere*");
				break;
			case 'nb gitgud':
				client.say("nightbox69", "Why yes boss blame your lack of brain power to speedrunning a very simple game where all resources has been made available to you over to game crashes. PogChamp");
				break;
			case 'nb plug':
				if(user.username === "nightbox69" && hasPlugged == false) {
		      client.say("nightbox69", "You actually want me to advertise on your channel?? Sure. Kappa");
		      setInterval(twitterPlug, 1805000);
		      setInterval(discordPlug, 1810000);
		    } else if (user.username === "nightbox69" && hasPlugged == true) {
		      client.say("nightbox69", "Error Found: Attempting to Plug more Ads.");
		    } else {
		    	client.say("nightbox69", "Error Found: Attempting to Plug Annoying Strimmer.");
		    }
				break;
				chatCounter = chatCounter + 1;
				if(chatCounter == intervalChat) {
					client.say("#nightbox69", "Can you believe someone is ACTUALLY TALKING to you right now boss? Kappa");
					intervalChat = intervalChat * 2;
				}
				break;
		}
	}
});

client.on('connected', function(address, port) {
  if(hasConnected == false) {
  	client.say("nightbox69", "I'm awake boss, I'm awake. Stop nudging the command prompt you sick man.");
  	setInterval(shamelessPlug, 1800000); //1800000
  	hasConnected = true;
  } else {
  	client.say("#nightbox69", "Error: Connection was interrupted. I highly suggest refreshing the strim so you can see Boss's frustrated face. Kappa.");
  }
});
