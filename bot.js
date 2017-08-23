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
intervalChat = 50,
hasConnected = false;
hasPlugged = false;

client.connect();

client.on("chat", (channel, user, message, self) => {
	var payload = message.toLowerCase();
	if(channel == "#nightbox69") {
		switch(payload) {
			case 'nb intro':
				client.say("#nightbox69", "I am Botbox69, rioting Bot of zee Boss. Currently at version 1.2");
				break;
			case 'nb riot':
				client.say("#nightbox69", "FUCKING RIOT LET'S GO *throws chairs everywhere*");
				break;
			case 'nb gitgud':
				client.say("nightbox69", "Why yes boss blame your lack of brain power to speedrunning a very simple game where all resources has been made available to you over to game crashes. PogChamp");
				break;
			case 'nb shutup':
				client.say("#nightbox69", "How about YOU SHUT UP AND DO YOUR SPEEDRUNS HUH??");
				break;
			case 'nb race':
				client.say("nightbox69", "Watch the other guys beat the snot out of my boss: <insert Kadgar Link here>.");
				break;
			case 'nb plug':
				if(user.username === "nightbox69" && hasPlugged == false) {
		      client.say("nightbox69", "You actually want me to advertise on your channel?? Sure. Kappa");
		      setInterval(twitterPlug, 1805000);
		      setInterval(discordPlug, 1810000);
		      hasPlugged = true;
		    } else if (user.username === "nightbox69" && hasPlugged == true) {
		      client.say("nightbox69", "Error Found: Attempting to Plug more Ads.");
		    } else {
		    	client.say("nightbox69", "Error Found: Attempting to Plug Annoying Strimmer.");
		    }
				break;
			case 'kappa':
				emoteCounter = emoteCounter + 1;
				if(emoteCounter == intervalEmote) {
					client.say("#nightbox69", "It's raining Kappa (" + intervalEmote + "+).");
				}
				intervalEmote = intervalEmote + 100;
				break;
			default:
				chatCounter = chatCounter + 1;
				if(chatCounter == intervalChat) {
					var annoyCounter = Math.floor((Math.random() * 7) + 1);
					switch(annoyCounter) {
						case 1:
							client.say("#nightbox69", "Can you believe someone is ACTUALLY TALKING to you right now boss? Or maybe it's just me. Kappa");
							break;
						case 2:
							client.say("#nightbox69", "Sometimes I wonder why people would even bother watching this stream. Maybe it's just me plugging stuff. Keepo");
							break;
						case 3:
							client.say("#nightbox69", "PJSalt RESET HYPE PJSalt");
							break;
						case 4:
							client.say("#nightbox69", "I must suggest that you guys leave my poor boss alone. Talking must be hard for him. Kappa");
							break;
						case 5:
							client.say("#nightbox69", "I DECLARE A MOMENT OF SILENCE. My Boss is about to fuck up somewhere. PogChamp");
							break;
						case 6:
							client.say("#nightbox69", "Oh my lord, is there a riot or was it just someone trying to speak with you? DansGame");
							break;
						case 7:
							client.say("#nightbox69", "BOSS I DEMAND A VACATION. Botting for you is a terribly frustrating and boring job.");
							break;
					}
					intervalChat = intervalChat + 50;
				}
				break;	
		}
	}
});

client.on("subscription", function (channel, username, method, message, userstate) {
	client.say("nightbox69", "BOSS BOSS!" + username + " CONTRIBUTED TO YOUR FEEDING PROGRAM! Thank you for the food!")
});

client.on("cheer", function (channel, userstate, message) {
	client.say("nightbox69", "Wow!" + userstate + "bits! Thanks for the food!");
});

client.on("hosted", function(channel, username, viewers, autohost) {
	if(autohost == true) {
  	client.say("nightbox69", "Mr. / Ms. / Mrs. / It " + username +  " has autohosted us with " + viewers + "people! BUT WHY?!! DansGame");
  } else if(autohost == false) {
  	client.say("nightbox69", "THIS CANNOT BE! TEH TEACHINGS STATE THAT " + username +  " HOSTED US WITH " + viewers + "PEOPLE FOR COMPLETE ATONEMENT! IT'S BEEN OUR ONLY HOPE ALL THESE YEARS! DansGame");
  }
});

client.on("resub", function (channel, username, months, message, userstate, methods) {
	client.say("nightbox69", "Oi, " + username + ", thanks for the " + months + " of sponsoring MY FOOD");
});

client.on("hosting", function (channel, target, viewers) {
	client.say("nightbox69", "Hosting Strimmer " + target + ". Let's watch and enjoy!");
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

function shamelessPlug() {
  client.say("nightbox69", "If you guys actually managed to like boss's stream (a statistical impossibility) consider hitting the follow button for more moronic speedruns that will hold no bearing to World Record. Kappa");
};

function twitterPlug() {
  client.action("nightbox69", "is forcibly ordered to tell people to (not) follow his boss at https://twitter.com/nightbox69");
}

function discordPlug() {
  client.say("nightbox69", "Zee Boss has a discord channel. Shame on him but do join! https://discord.gg/Gw5r9S6");
}