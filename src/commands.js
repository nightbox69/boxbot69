import { CHANNEL } from './oauth.js';

let channelName = CHANNEL;

// Important Commands
export function intro(client) {
  client.say(channelName, 'I am Botbox69, rioting Bot of zee Boss. Currently at version 1.2.0.');
};

export function disconnect(client) {
  client.say(channelName, 'Goodbye, friends.');
  client.disconnect();
  process.exit(0);
};

export function emulator(client) {
    client.say(channelName, 'Runs are done on PSXFin - It has crashed multiple times already and will prolly continue until boss gets Lucky and PB. It also forces the boss from checking other windows or else the sound will be cutoff so any strim alerts will be thanked instead of checked. The only active windows the boss will have will be chat, his notes, livesplit and the emulator.');
};

export function race(client, raceTracker = false, runnerList = [ channelName ]) {
  var data = ''
  if(raceTracker == true) {
    for (var i = 0; i < runnerList.length; i++) {
      data += runnerList[i] + '/';
    }
    client.say(channelName, `Watch the other guys beat the snot out of my boss: https://www.multitwitch.tv/${data}`);
  } else {
    client.say(channelName, "Boss is too scared to race.");
  }
};

export function shoutOut(client, userstate, splitPayload) {
  if(userstate.mod == true || userstate.username == channelName) {
    if(splitPayload.startsWith('@')) {
      splitPayload = splitPayload.substring(1);
    };
    client.say(channelName, `Shoutouts to ${ splitPayload } playing/doing something I am unable to know because my boss is incompetent at coding. Please follow them at https://www.twitch.tv/${ splitPayload }`);
  } else {
    client.say(channelName, 'You trying something? Keepo');
  };
};

export function raceOn(client, userstate) {
  if(userstate.mod == true || userstate.username == channelName) {
    raceOn.raceTracker = true;
    client.say(channelName, 'A race, huh? Think you can keep up?');
    client.say(channelName, 'Command nb race is now active.');
  } else {
    client.say(channelName, 'You trying something? Keepo');
  };
};

export function raceOff(client, userstate) {
  if(userstate.mod == true || userstate.username == channelName) {
    raceOff.raceTracker = false;
    raceOff.runnerList = [ channelName ];
    client.say(channelName, 'Everybody died?! DansGame');
  } else {
    client.say(channelName, 'You trying something? Keepo');
  };
};

export function addRunner(client, userstate, splitPayload, runnerList = [ channelName ]) {
  splitPayload = splitPayload[3];
  if(userstate.mod == true || userstate.username == channelName) {
    if(splitPayload.startsWith('@')) {
      splitPayload = splitPayload.substring(1);
    };
    runnerList.push(splitPayload);
    addRunner.runnerList = runnerList;
    client.say(channelName, `Runner ${ splitPayload } is added to race list`);
  } else {
    client.say(channelName, 'You trying something? Keepo');
  };
};

export function deleteRunner(client, userstate, splitPayload, runnerList = [ channelName ]) {
  splitPayload = splitPayload[3];
  if(userstate.mod == true || userstate.username == channelName) {
    if(splitPayload.startsWith('@')) {
      splitPayload = splitPayload.substring(1);
    };
    var indexCheck = runnerList.indexOf(splitPayload);
    if(indexCheck > -1) {
      runnerList.splice(indexCheck, 1);
    };
    deleteRunner.runnerList = runnerList;
    client.say(channelName, `Runner ${ splitPayload } is deleted to race list`);
  } else {
    client.say(channelName, 'You trying something? Keepo');
  };
};

// Meme Commands
export function sandwich(client, userName) {
  if(userName != channelName) {
    client.action(channelName, `makes ${ userName } a sandwich. NotLikeThis`);
    client.say(channelName, 'BOSS, WHY DO I HAVE TO MAKE THEM A SANDWICH?!! DansGame');
  } else {
    client.say(channelName, 'Why should I make you a sandwich??');
  };
};

export function makemeasandwich(client, userName) {
  if(userName == channelName) {
    client.action(channelName, `makes ${ userName } a sandwich. NotLikeThis`);
    client.say(channelName, 'BibleThump BOT ABUSE BibleThump');
  } else {
    client.say(channelName, 'There is no reason for me to make sudo sandwiches to plebs. OpieOP');
  };
};

export function riot(client) {
  client.say(channelName, `FUCKING RIOT LET'S GO`);
  client.action(channelName, 'throws chairs and tables everywhere SwiftRage');
};

export function gitgud(client) {
  client.say(channelName, 'Oh boss, blame your lack of brain power to speedrunning a very simple game where all resources has been made available to you over to game crashes and bad RNG. PogChamp');
};

export function shutup(client) {
  client.say(channelName, 'How about YOU SHUT UP AND DO YOUR SPEEDRUNS HUH??');
};

export function stupidstrimmer(client) {
  client.say(channelName, 'Zee boss has terrible interaction skills. The run will die if he starts blabbering to ask how your day is. NotLikeThis');
};

export function sammich(client) {
  client.say(channelName, 'SwiftRage MOTHERFUCKER SwiftRage WHAT. SwiftRage THE. SwiftRage FUCK. SwiftRage IS. SwiftRage YOUR SwiftRage PROBLEM??? SwiftRage');
};

export function notes(client) {
  client.say(channelName, `The boss's speedrun notes are found here: https://github.com/nightbox69/Speedruns . They may be outdated but it is what it is. ¯\_(ツ)_/¯ `);
};

export function werpa() {
  client.say(channelName, `/timeout ${ userstate.username } 1`);
  client.say(channelName, 'You were saying something? Kappa');
  client.action(channelName, `hands ${ userstate.username } a dictionary. Kappa`);
};

export function nbDad(client, userName, dadMod, dadChecker, winner) {
  if(dadMod == true) {
    var scrub = userName;
    var winnerScrub = winner;
    var dadCounter = Math.floor((Math.random() * 40) + 1);
    if(dadCounter == 1 && dadChecker == false) {
      var someLoserScrub = scrub;
    client.say(channelName, `/timeout ${ someLoserScrub } 600 Nice Try` );
    client.say(channelName, `Wow, ${ someLoserScrub } just an inch?? GitGud. LUL`  );
    } else if(dadCounter == 40 && dadChecker == false) {
      var someScrub = scrub;
      client.say(channelName, `WINNER, WINNER ${ dadCounter } INCHES OF PURE PAIN FOR ${ someScrub }!! Eat that. LUL`);
      client.say(channelName, 'nb dad now closed for 10 minutes.');
      client.say(channelName, `/timeout ${ someScrub } 1200 Thanks for playing Kappa` );
      nbDad.dadChecker = true;
      nbDad.winner = someScrub;
      setTimeout(function() {
        nbDad.dadChecker = false;
        client.say(channelName, 'nb dad now open OpieOP');
      }, 600000);
    } else if(dadChecker == false) {
      client.say(channelName, `Dad has ${ dadCounter } inches of love for you today, ${ scrub  }.`);
    } else if(dadChecker == true) {
      client.say(channelName, `Some scrub by the name of ${ winnerScrub } won the damn game. Check back again later.`);
    };
  };
};

export function chatInterval(client, annoyCounter) {
  switch(annoyCounter) {
    case 1:
      client.say(channelName, `Can you believe someone is ACTUALLY TALKING to you right now boss? Or maybe it's just me. Kappa`);
      break;
    case 2:
      client.say(channelName, 'Sometimes, I wonder why people would even bother watching this stream. This run is total shit. Keepo');
      break;
    case 3:
      client.say(channelName, 'PJSalt RESET HYPE PJSalt');
      break;
    case 4:
      client.say(channelName, 'I must suggest that you guys leave my poor boss alone, talking must be quite a task for him. Kappa');
      break;
    case 5:
      client.say(channelName, 'I DECLARE A MOMENT OF SILENCE. PogChamp My Boss is about to fuck up somewhere. PogChamp');
      break;
    case 6:
      client.say(channelName, 'Boss, I have 69 reasons to quit botting for you and this run is one of them FailFish');
      break;
    case 7:
      client.say(channelName, 'BOSS I DEMAND A VACATION. Botting for you is a terribly frustrating and boring job.');
      break;
  };
};

export function uptimeChatter(client, uptimeCounter) {
  switch(uptimeCounter) {
    case 1:
      client.say(channelName, `Since forever, ${ userstate.username } ... Since forever. :|`);
    break;
    case 2:
      client.say(channelName, `Why bother asking for uptime ${ userstate.username } The run won't survive anyway. :|`);
    break;
    case 3:
      client.say(channelName, 'Wonderful, a command that checks how long the boss is strimming when there is a freaking timer infront of their face.');
    break;
    case 4:
      client.say(channelName, 'The boss has been live since the 1989 Philippine Coup Attempt. And you can take that to the bank. PogChamp');
    break;
  };
};

export function modDad(client, userstate) {
  if(userstate.mod == true || userstate.username == channelName) {
    client.say(channelName, 'nb dad is up. Kappa');
    dadMod = true;
  } else {
    client.say(channelName, 'You were trying something? Kappa');
  };
};
