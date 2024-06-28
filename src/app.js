import tmi from 'tmi.js';
import { USERNAME, TOKEN, CHANNEL } from './oauth.js';
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
		password: TOKEN,
	},
	channels: [ CHANNEL ]
});

// Global Variables, still have no idea what to do with them.
let chatCounter = 0;
let intervalChat = Math.floor((Math.random() * 50) + 1);
let dadChecker = false;
let dadMod = true;
let benggaCheck = false;
let kitzCheck = false;
let mochieCheck = false;
let mitchakiCheck = false;
let raeCheck = false;
let seikaCheck = false;
let raceTracker = false;
let payload;
let splitPayload;
let getCommand;
let channelName = CHANNEL;
let runnerList = [ channelName ];

// Connect Bot to Chat
client.connect().then((data) => {
    console.log(`Bot has started.`);
    setTimeout(function() { client.say(channel, `I'm awake boss, I'm awake. Stop nudging the command prompt you old dying man.`); }, 5000);
}).catch(console.error);

// console.log reconnections
client.on('reconnect', () => {
  reconnectHandler()
});

// Read all messages
client.on('message', (channel, userstate, message, self) => {
  if(self) return;
  payload = message.toLowerCase();
  splitPayload = payload.split(' ');
  let confirmCommand = splitPayload[0];

  // It should count messages that aren't mine
  if(userstate.username != channelName) {
    chatCounter = chatCounter + 1;
  };

  // Confirms command starts with nb
  if(confirmCommand == 'nb') {
    if(splitPayload.length == 2) {
      getCommand = splitPayload[1];
    } else if(splitPayload.length >= 3) {
      if(splitPayload[1] == 'shoutout') {
        getCommand = splitPayload[1];
      } else {
        getCommand = `${splitPayload[1]} ${splitPayload[2]}`;
      }
    };
    runCommands(client, userstate, getCommand, splitPayload);
  };

  // Bullshit
  if(payload == '!uptime') {
    let uptimeCounter = Math.floor((Math.random() * 4) + 1);
    commands.uptimeChatter(client, uptimeCounter);
  };

  // Friend Plugs
  if(userstate.username == 'rebengga' && benggaCheck == false) {
    plugs.rebengga(client);
    benggaCheck = true;
  };

  if(userstate.username == 'kitzcua' && kitzCheck == false) {
    plugs.kitz(client);
    kitzCheck = true;
  };

  if(userstate.username == 'mochiemadness' && mochieCheck == false) {
    plugs.balutchie(client);
    mochieCheck = true;
  };

  if(userstate.username == 'mitchakii' && mitchakiCheck == false) {
    plugs.mitchaki(client);
    mitchakiCheck = true;
  };

  if(userstate.username == 'raeyei' && raeCheck == false) {
    plugs.raeyei(client);
    raeCheck = true;
  };

  if(userstate.username == 'seika' && seikaCheck == false) {
    plugs.seika(client);
    seikaCheck = true;
  };
  if(chatCounter == intervalChat) {
    let annoyCounter = Math.floor((Math.random() * 7) + 1);
    commands.chatInterval(client, annoyCounter);
    intervalChat = intervalChat + Math.floor((Math.random() * 200) + 1);
  };
});

function runCommands(client, userstate, getCommand, splitPayload) {
  switch(getCommand) {
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
      if(userstate.username == channelName) {
        commands.disconnect(client);
      } else if (userstate.mod == false){
        client.say(channel, `/timeout ${ userstate.username } 30 How dare you D:` );
      };
    break;
    case 'shoutout':
      commands.shoutOut(client, userstate, splitPayload[2]);
    break;
    case 'race':
      commands.race(client, raceTracker, runnerList);
    break;
    case 'race setup':
      console.log(userstate);
      commands.raceOn(client, userstate);
      if(userstate.mod == true || userstate.username == channelName) {
        raceTracker = commands.raceOn.raceTracker;
      };
    break;
    case 'race off':
      commands.raceOff(client, userstate);
      if(userstate.mod == true || userstate.username == channelName) {
        runnerList = commands.raceOff.runnerList;
        raceTracker = commands.raceOff.raceTracker;
      };
    break;
    case 'add runner':
      commands.addRunner(client, userstate, splitPayload, runnerList);
      if(userstate.mod == true || userstate.username == channelName) {
        runnerList = commands.addRunner.runnerList;
      };
    break;
    case 'rm runner':
      commands.deleteRunner(client, userstate, splitPayload, runnerList);
      if(userstate.mod == true || userstate.username == channelName) {
        runnerList = commands.deleteRunner.runnerList;
      };
    break;
    // Memes
    case 'sandwich':
      var userName = userstate.username;
      commands.sandwich(client, userName);
    break;
    case 'sudo makemeasandwich':
      var userName = userstate.username;
      commands.makemeasandwich(client, userName);
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
      commands.modDad(client, userstate);
    break;
    case 'dad':
      if(commands.nbDad.dadChecker == true) {
        dadChecker = true;
        let winner = commands.nbDad.winner;
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
  };
};

// Alerts Functions
client.on('hosted', (channel, username, viewers, autohost) => {
  alerts.hostedHandler(channel, username, viewers, autohost);
});

client.on('subscription', (channel, username, method, message, userstate) => {
  alerts.subscriptionHandler(client, channel, username, method, message, userstate);
});

client.on('raided', (channel, username, viewers) => {
  alerts.raidedHandler(client, channel, username, viewers);
});

client.on('cheer', (channel, userstate, message) => {
  alerts.cheerHandler(client, channel, userstate, message);
});

client.on('giftpaidupgrade', (channel, username, sender, userstate) => {
  alerts.giftPaidUpgradeHandler(client, channel, username, sender, userstate);
});

client.on('hosting', (channel, target, viewers) => {
  alerts.hostingHandler(client, channel, target, viewers);
});

client.on('resub', (channel, username, months, message, userstate, methods) => {
  alerts.resubHandler(client, channel, username, months, message, userstate, methods);
});

client.on('subgift', (channel, username, streakMonths, recipient, methods, userstate) => {
  alerts.subGiftHandler(client, channel, username, streakMonths, recipient, methods, userstate);
});

function reconnectHandler () {
  console.log('Reconnecting...');
};
