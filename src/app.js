import tmi from 'tmi.js';
import { USERNAME, TOKEN, CHANNEL } from './oauth';
import * as commands from './commands';
import * as plugs from './plugs'

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
var emoteCounter = 0;
var intervalEmote = Math.floor((Math.random() * 10) + 1);
var chatCounter = 0;
var intervalChat = Math.floor((Math.random() * 50) + 1);
var raceTracker = false;
var dadChecker = false;
var dadMod = true;
var benggaCheck = false;
var raeCheck = false;
var kitzCheck = false;
var mochieCheck = false;

// Connect Bot to Chat
client.connect().then((data) => {
    console.log(`Bot has started.`);
    // setTimeout(function() { client.say('nightbox69', `I\'m awake boss, I\'m awake. Stop nudging the command prompt you old dying man.`); }, 5000);
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
//      case 'dad on':
//        if(userstate.mod == true || userstate.badges.broadcaster == '1') {
//          client.say(channel, 'nb dad is up. Kappa');
//          dadMod = on;
//        } else {
//          client.say(channel, 'You were trying something? Kappa');
//        }
//      break;
      case 'dad':
        if(commands.checker == true) {
          dadChecker = true;
          client.say(channel,'App: ' + dadChecker);
        }
        var userName = userstate.username;
        commands.nbDad(client, userName, dadMod, dadChecker);
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
    switch(uptimeCounter) {
      case 1:
        client.say(channel, `Since forever, ${ userstate.username } ... Since forever. :|`);
      break;
      case 2:
        client.say(channel, `Why bother asking for uptime ${ userstate.username } The run won't survive anyway. :|`);
      break;
      case 3:
        client.say(channel, 'Wonderful, a command that checks how long the boss is strimming when there is a freaking timer infront of their face.');
      break;
      case 4:
        client.say(channel, 'The boss has been live since the 1989 Philippine Coup Attempt. And you can take that to the bank. PogChamp');
      break;
    }
  }

  if((payload.includes('petmalu') || payload.includes('werpa')) && + userstate.mod == false) {
    client.say(channel, `/timeout ${ userstate.username } 1`);
    client.say(channel, 'You were saying something? Kappa');
    client.action('nightbox69', `hands ${ userstate.username } a dictionary. Kappa`);
  }

  if(userstate.username != 'botbox69') {
    chatCounter = chatCounter + 1;
  }

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
    switch(annoyCounter) {
      case 1:
        client.say(channel, `Can you believe someone is ACTUALLY TALKING to you right now boss? Or maybe it's just me. Kappa`);
        break;
      case 2:
        client.say(channel, 'Sometimes, I wonder why people would even bother watching this stream. This run is total shit. Keepo');
        break;
      case 3:
        client.say(channel, 'PJSalt RESET HYPE PJSalt');
        break;
      case 4:
        client.say(channel, 'I must suggest that you guys leave my poor boss alone, talking must be quite a task for him. Kappa');
        break;
      case 5:
        client.say(channel, 'I DECLARE A MOMENT OF SILENCE. PogChamp My Boss is about to fuck up somewhere. PogChamp');
        break;
      case 6:
        client.say(channel, 'Boss, I have 69 reasons to quit botting for you and this run is one of them FailFish');
        break;
      case 7:
        client.say(channel, 'BOSS I DEMAND A VACATION. Botting for you is a terribly frustrating and boring job.');
        break;
    }
    intervalChat = intervalChat + Math.floor((Math.random() * 200) + 1);
  }
});

function reconnectHandler () {
  console.log('Reconnecting...')
}

export function setChecker() {
  dadChecker = true;
}
