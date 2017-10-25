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
		username: 'boxbot69', // change this username
		password: authen.password // create an exports.password in oauth.js
	},
	channels: ['#nightbox69']
}
client = new tmi.client(options),
emoteCounter = 0,
intervalEmote = Math.floor((Math.random() * 10) + 1),
chatCounter = 0,
intervalChat = Math.floor((Math.random() * 50) + 1),
hasConnected = false;
hasPlugged = false;
raceTracker = false;
judooyTimer = false;

client.connect();

// Chat Commands
client.on("chat", (channel, user, message, self) => {
	var payload = message.toLowerCase();
	if(self) return;
	if(channel == "#nightbox69") {
		switch(payload) {
			case 'nb intro':
				client.say("#nightbox69", "I am Botbox69, rioting Bot of zee Boss. Currently at version 1.5.0. Commands Here: https://pastebin.com/RHUEN7hy");
				break;
			case 'nb riot':
				client.say("#nightbox69", "FUCKING RIOT LET'S GO *throws chairs everywhere*");
				break;
			case 'nb tom':
				client.say("#nightbox69", "Oh, that guy. :| https://pastebin.com/xFA4RCAa");
				break;
			case 'nb gitgud':
				client.say("nightbox69", "Why yes boss blame your lack of brain power to speedrunning a very simple game where all resources has been made available to you over to game crashes. PogChamp");
				break;
			case 'nb shutup':
				client.say("#nightbox69", "How about YOU SHUT UP AND DO YOUR SPEEDRUNS HUH??");
				break;
			case 'nb stupidStrimmer':
				client.say("#nightbox69", "Zee boss has terrible interaction skills. The run will die if he starts blabbering to ask how your day is. NotLikeThis");
				break;
			case '!points':
				if(user.mod == false) {
					client.say("#nightbox69", "/timeout " + user.username + " 1");
					client.say("#nightbox69", user.username + "'s points from KitzCua, Raeyei, RumbleRoyale, and Suzzysaur channels has been removed.");
					client.action("nightbox69", "is proud of its mod abuse.");
				} else {
					client.say("#nightbox69", "Wow, look at this idiot mod " + user.username + " trying to see if there are points. KappaPride")
				}
				break;
			case 'nb race':
				if(raceTracker == true) {
					client.say("nightbox69", "Watch the other guys beat the snot out of my boss: http://kadgar.net/live/");
				} else {
					client.say("nightbox69", "Boss is too scared to race.");
				}
				break;
			case 'nb pb':
				client.say("nightbox69", "Final Fantasy X - PC(Any%): 9h 43m 45s");
				break;
			case 'nb wr':
				client.say("nightbox69", "Final Fantasy X - PC(Any%): 9h 20m 00s by Flobberworm4");
				break;
			case 'nb clear':
				if(user.username === "nightbox69") {
					chatCounter = 0;
					intervalChat = 50;
					client.clear("nightbox69");
					setTimeout(clearChat, 3000);
				} else {
					client.say("nightbox69", "You trying something? Keepo");
				}
				break;
			case 'nb racesetup':
				if(user.username === "nightbox69") {
					raceTracker = true;
					client.say("nightbox69", "A race, huh? Think you can keep up?");
				} else {
					client.say("nightbox69", "You trying something? Keepo");
				}
				break;
			case 'nb discord':
				client.say("nightbox69", "Zee Boss has a discord channel. Shame on him but do join! https://discord.gg/Gw5r9S6");
				break;
			case 'nb facebook':
				client.say("nightbox69", "Be sur eto click this unlikeable facebook page here that was made for my Boss. https://www.facebook.com/nightbox69");
				break;
			case 'nb twitter':
				client.action("nightbox69", "is forcibly ordered to tell people to (not) follow his boss at https://twitter.com/nightbox69");
				break;
			case 'nb sandwich':
				if(user.username != "nightbox69") {
					client.action("nightbox69", "makes " + user.username + " a sandwich. NotLikeThis");
					client.say("nightbox69", "BOSS, WHY DO I HAVE TO MAKE THEM A SANDWICH?!! DansGame");
				} else {
					client.say("nightbox69", "Why should I make you a sandwich.");
				}
				break;
			case 'sudo makeMeOneSandwich':
				if(user.username == "nightbox69") {
					client.action("nightbox69", "makes " + user.username + " a sandwich. NotLikeThis");
					client.say("nightbox69", "BibleThump BOT ABUSE BibleThump");
				} else {
					client.say("nightbox69", "There is no reason for me to make sudo sandwiches to plebs. OpieOP");
				}
				break;
			case 'nb kappa':
				client.say("nightbox69", "Dad is that you??");
				break;
			case 'nb dad':
				client.say("nightbox69", "Dad has " + Math.floor((Math.random() * 20) + 1) + " inches of love for you today.");
				break;
			case 'nb racedown':
				if(user.username === "nightbox69") {
					raceTracker = false;
					client.say("nightbox69", "Everybody died?! DansGame");
				} else {
					client.say("nightbox69", "You trying something? Keepo");
				}
				break;
			case 'nb commands':
				client.say("nightbox69", "BUT I DON'T WANNA TELL YOU STUFF!! DansGame https://pastebin.com/RHUEN7hy");
				break;
			default:
				if(user.username == "judooy" && judooyTimer == false) {
					client.say("#nightbox69", "/timeout " + user.username + " " + Math.floor((Math.random() * 20) + 1) + " LUMAYO KA SA ANAK NI BOSS");
					client.say("#nightbox69", "ULOL VAC MO DIS");
					judooyTimer = true;
					setInterval(judooyClear, 300000);
				}

				if((payload.includes("lodi") || payload.includes("petmalu") || payload.includes("werpa")) && + user.mod == false) {
					client.say("#nightbox69", "/timeout " + user.username + " 1");
					client.say("#nightbox69", "You were saying something? Kappa");
					client.action("nightbox69", "hands " + user.username + " a dictionary. Kappa");
				}

				if(message.includes("Kappa") && user.username != "botbox69") {
					emoteCounter = emoteCounter + 1;
					if(emoteCounter == intervalEmote) {
						client.say("#nightbox69", "HOLY SHIT " + user.username + " IS THE GOD OF Kappa (" + intervalEmote + "+)");
						intervalEmote = intervalEmote + (Math.floor((Math.random() * 50) + 1));
					}
				}

				if(user.username != "botbox69") {
					chatCounter = chatCounter + 1;
				}

				if(chatCounter == intervalChat) {
					var annoyCounter = Math.floor((Math.random() * 7) + 1);
					switch(annoyCounter) {
						case 1:
							client.say("#nightbox69", "Can you believe someone is ACTUALLY TALKING to you right now boss? Or maybe it's just me. Kappa");
							break;
						case 2:
							client.say("#nightbox69", "Sometimes, I wonder why people would even bother watching this stream. This run is total shit. Keepo");
							break;
						case 3:
							client.say("#nightbox69", "PJSalt RESET HYPE PJSalt");
							break;
						case 4:
							client.say("#nightbox69", "I must suggest that you guys leave my poor boss alone, talking must be quite a task for him. Kappa");
							break;
						case 5:
							client.say("#nightbox69", "I DECLARE A MOMENT OF SILENCE. PogChamp My Boss is about to fuck up somewhere. PogChamp");
							break;
						case 6:
							client.say("#nightbox69", "Boss, I have 69 reasons to quit botting for you and this run is one of them FailFish");
							break;
						case 7:
							client.say("#nightbox69", "BOSS I DEMAND A VACATION. Botting for you is a terribly frustrating and boring job.");
							break;
					}
					intervalChat = intervalChat + Math.floor((Math.random() * 200) + 1);
				}
				break;	
		}
	}
});

// Whisper Commands
client.on("whisper", function (from, userstate, message, self) {
	var payload = message.toLowerCase();
	if (self) return;
	switch(payload) {
		case 'nb intro':
			client.whisper(from, "I am Botbox69, rioting Bot of zee Boss. Currently at version 1.3.0");
			break;
		case 'nb race':
			client.whisper(from, "Watch the other guys beat the snot out of my boss: http://kadgar.net/");
			break;
		case 'nb pb':
			client.whisper(from, "Final Fantasy X - Any%: 9h 43m 45s");
			break;
		case 'nb wr':
			client.whisper(from, "Final Fantasy X - Any%: 9h 20m 00s by Flobberworm4");
			break;
		default:
			break;
	}
});

// Subscription Notification
client.on("subscription", function(channel, username, method, message, userstate) {
	client.say("nightbox69", "BOSS BOSS! " + username + " CONTRIBUTED TO YOUR FEEDING PROGRAM! Thank you for the food!")
});

// Bits Notification
client.on("cheer", function (channel, userstate, message) {
	client.say("nightbox69", "Wow! " + userstate + "bits! Thanks for the food contribution!");
});

// Host Notification
client.on("hosted", function(channel, username, viewers, autohost) {
  	client.say("nightbox69", "THIS CANNOT BE! TEH TEACHINGS STATE THAT " + username +  " HOSTED US WITH " + viewers + "PEOPLE FOR COMPLETE ATONEMENT! IT'S BEEN THIS CHANNEL'S HOPE ALL THESE YEARS! DansGame");
});

// ReSubscription Notification
client.on("resub", function(channel, username, months, message, userstate, methods) {
	client.say("nightbox69", "Oi, " + username + ", thanks for the " + months + " of sponsoring the BOSS'S FOOD");
});

// Hosting Notification
client.on("hosting", function (channel, target, viewers) {
	client.say("nightbox69", "Hosting Strimmer " + target + ". This is about to be another salt fiesta!");
});

// Connection Announcement and Bot Plugs (1 Hour Interval with 30 second intervals in between)
client.on('connected', function(address, port) {
  if(hasConnected == false) {
  	client.say("nightbox69", "I'm awake boss, I'm awake. Stop nudging the command prompt you old dying man.");
  	setInterval(followPlug, 3600000);
  	setInterval(discordPlug, 3630000);
  	setInterval(twitterPlug, 3660000);
  	setInterval(facebookPlug, 3690000);
  	hasConnected = true;
  } else {
  	client.say("#nightbox69", "Error: Connection was interrupted. I highly suggest refreshing the strim so you can see Boss's frustrated face. Kappa.");
  }
});

// SOCIAL MEDIA AND TWITCH PLUGS AND JUDOOY 
function followPlug() {
  client.say("nightbox69", "If you guys actually managed to like boss's stream (a statistical impossibility) consider hitting the follow button for more moronic speedruns that will hold no bearing to World Record. Kappa");
};

function clearChat() {
	client.say("nightbox69", "Chat has been cleared. You're welcome Boss. Kappa");
}

function discordPlug() {
	client.say("nightbox69", "Zee Boss has a discord channel. Shame on him but do join! https://discord.gg/Gw5r9S6");
}

function facebookPlug() {
	client.say("nightbox69", "Be sure to click this unlikeable facebook page here that was made for my Boss. https://www.facebook.com/nightbox69");
}

function twitterPlug() {
	client.action("nightbox69", "is forcibly ordered to tell people to (not) follow his boss at https://twitter.com/nightbox69");
}

function judooyClear() {
	judooyTimer = false;
}