import tmi from 'tmi.js';
import { USERNAME, TOKEN, CHANNEL } from './oauth';
import * as commands from './commands';
import * as plugs from './plugs';
import * as alerts from './alerts';

const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: 'info' },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: USERNAME,
		password: TOKEN
	},
	channels: [ CHANNEL ]
});

// Global Variables, still have no idea what to do with them.
var chatCounter = 0;
var intervalChat = Math.floor((Math.random() * 50) + 1);
var raceTracker = false;
var dadChecker = false;
var dadMod = false;
var benggaCheck = false;
var raeCheck = false;
var kitzCheck = false;
var mochieCheck = false;

// Connect Bot to Chat
client.connect().then((data) => {
    console.log(`Bot has started.`);
    setTimeout(function() { client.say('nightbox69', `I'm awake boss, I'm awake. Stop nudging the command prompt you old dying man.`); }, 5000);
}).catch(console.error);

// console.log reconnections
client.on('reconnect', () => {
  reconnectHandler()
})

// Read all messages
client.on('message', (channel, userstate, message, self) => {
  var payload = message.toLowerCase();
	if(self) return;
  let confirmCommand = payload.substring(0,3);
  let checkCommand = payload.substring(3);

  if(confirmCommand == 'nb ') {
    switch(checkCommand) {
      // Important Commands
      case 'intro':
        commands.intro(client);
      break;
      case 'emulator':
        commands.emulator(client);
      break;
      case 'notes':
        commands.notes(client);
      break;
      case 'bot off':
        commands.disconnect(client);
      break;

      // Memes
      case 'sandwich':
        var userName = userstate.username;
        commands.sandwich(userName, client);
      break;
      case 'sudo makemeasandwich':
        var userName = userstate.username;
        commands.makemeasandwich(userName, client);
      break;
      case 'riot':
        commands.riot(client);
      break;
      case 'gitgud':
        commands.gitgud(client);
      break;
      case 'shutup':
        commands.shutup(client);
      break;
      case 'stupid strimmer':
        commands.stupidstrimmer(client);
      break;
      case 'sammich':
        commands.sammich(client);
      break;
      case 'dad on':
        if(userstate.mod == true || userstate.badges.broadcaster == '1') {
          client.say(channel, 'nb dad is up. Kappa');
          dadMod = true;
        } else {
          client.say(channel, 'You were trying something? Kappa');
        }
      break;
      case 'dad':
        if(commands.nbDad.dadChecker == true) {
          dadChecker = true;
          var winner = commands.nbDad.someScrub;
        } else {
          dadChecker = false;
        }
        var userName = userstate.username;
        commands.nbDad(client, userName, dadMod, dadChecker, winner);
      break;

      // Plugs
      case 'discord':
        plugs.discord(client);
      break;
      case 'facebook':
        plugs.facebook(client);
      break;
      case 'twitter':
        plugs.twitter(client);
      break;
    }
  }

  if(payload == '!uptime') {
    var uptimeCounter = Math.floor((Math.random() * 4) + 1);
    commands.uptimeChatter(client, uptimeCounter);
  }

  if((payload.includes('petmalu') || payload.includes('werpa')) && userstate.mod == false) {
    userName = userstate.username;
    commands.werpa(client, userName);
  }

  if(userstate.username != 'botbox69') {
    if( userstate.username != 'nightbox69'){
      chatCounter = chatCounter + 1;
    }
  }

  // Friend Plugs
  if(userstate.username == 'rebengga' && benggaCheck == false) {
    plugs.rebengga(client);
    benggaCheck = true;
  }

  if(userstate.username == 'raeyei' && raeCheck == false) {
    plugs.raeyei(client);
    raeCheck = true;
  }

  if(userstate.username == 'kitzcua' && kitzCheck == false) {
    plugs.kitz(client);
    kitzCheck = true;
  }

  if(userstate.username == 'mochiemadness' && mochieCheck == false) {
    plugs.balutchie(client);
    mochieCheck = true;
  }

  if(chatCounter == intervalChat) {
    var annoyCounter = Math.floor((Math.random() * 7) + 1);
    commands.chatInterval(client, annoyCounter);
    intervalChat = intervalChat + Math.floor((Math.random() * 200) + 1);
  }
});

// Alerts
client.on('hosted', (channel, username, viewers, autohost) => {
  alerts.hostedHandler(channel, username, viewers, autohost);
})

client.on('subscription', (channel, username, method, message, userstate) => {
  alerts.subscriptionHandler(client, channel, username, method, message, userstate);
})

client.on('raided', (channel, username, viewers) => {
  alerts.alerts.raidedHandler(client, channel, username, viewers);
})

client.on('cheer', (channel, userstate, message) => {
  alerts.cheerHandler(client, channel, userstate, message);
})

client.on('giftpaidupgrade', (channel, username, sender, userstate) => {
  alerts.giftPaidUpgradeHandler(client, channel, username, sender, userstate);
})

client.on('hosting', (channel, target, viewers) => {
  alerts.hostingHandler(client, channel, target, viewers);
})

client.on('resub', (channel, username, months, message, userstate, methods) => {
  alerts.resubHandler(client, channel, username, months, message, userstate, methods);
})

client.on('subgift', (channel, username, streakMonths, recipient, methods, userstate) => {
  alerts.subGiftHandler(client, channel, username, streakMonths, recipient, methods, userstate);
})

function reconnectHandler () {
  console.log('Reconnecting...');
}
