import { CHANNEL as channel } from './oauth';

export function intro(client) {
  client.say(channel, 'I am Botbox69, rioting Bot of zee Boss. Currently at version 1.2.0.');
}

export function disconnect(client) {
  client.say(channel, 'Goodbye, friends.');
  client.disconnect();
}

export function emulator(client) {
  client.say(channel, 'Runs are done on PSXFin - It has crashed multiple times already and will prolly continue until boss gets Lucky and PB. It also forces the boss from checking other windows or else the sound will be cutoff so any strim alerts will be thanked instead of checked. The only active windows the boss will have will be chat, his notes, livesplit and the emulator.');
}

export function sandwich(userName, client) {
  if(userName != 'nightbox69') {
    client.action(channel, `makes ${ userName } a sandwich. NotLikeThis`);
    client.say(channel, 'BOSS, WHY DO I HAVE TO MAKE THEM A SANDWICH?!! DansGame');
  } else {
    client.say(channel, 'Why should I make you a sandwich??');
  }
}

export function makemeasandwich(userName, client) {
  if(userName == 'nightbox69') {
    client.action(channel, `makes ${ userName } a sandwich. NotLikeThis`);
    client.say(channel, 'BibleThump BOT ABUSE BibleThump');
  } else {
    client.say(channel, 'There is no reason for me to make sudo sandwiches to plebs. OpieOP');
  }
}

export function riot(client) {
  client.say(channel, `FUCKING RIOT LET'S GO`);
  client.action(channel, 'throws chairs and tables everywhere SwiftRage');
}

export function gitgud(client) {
  client.say('nightbox69', 'Oh boss, blame your lack of brain power to speedrunning a very simple game where all resources has been made available to you over to game crashes and bad RNG. PogChamp');
}

export function shutup(client) {
  client.say(channel, 'How about YOU SHUT UP AND DO YOUR SPEEDRUNS HUH??');
}

export function stupidstrimmer(client) {
  client.say(channel, 'Zee boss has terrible interaction skills. The run will die if he starts blabbering to ask how your day is. NotLikeThis');
}

export function sammich(client) {
  client.say(channel, 'SwiftRage MOTHERFUCKER SwiftRage WHAT. SwiftRage THE. SwiftRage FUCK. SwiftRage IS. SwiftRage YOUR SwiftRage PROBLEM??? SwiftRage');
}

export function notes(client) {
  client.say(channel, `The boss's speedrun notes are found here: https://github.com/nightbox69/Speedruns . It currently only has the outdated version of Chrono Cross, and his current notes for FFX but will slowly expand when he feels like doing another.`);
}

export function nbDad(client, userName, dadMod, dadChecker, dadCounter, winner) {
  if(dadMod == true) {
      var scrub = userName;
      var dadCounter = Math.floor((Math.random() * 40) + 1);
      if(dadCounter == 1 && dadChecker == false) {
          var someLoserScrub = scrub
          client.say(channel, `/timeout ${ someLoserScrub } 600 Nice Try` );
          client.say(channel, `Wow, ${ someLoserScrub } just an inch?? GitGud. LUL`  );
      } else if(dadCounter == 40 && dadChecker == false) {
          var someScrub = scrub;
          client.say(channel, `WINNER, WINNER ${ dadCounter } INCHES OF PURE PAIN FOR ${ someScrub }!! Eat that. LUL`);
          client.say(channel, 'nb dad now closed for 10 minutes.');
          client.say(channel, `/timeout ${ someScrub } 1200 Thanks for playing Kappa` );
          nbDad.dadChecker = true;
          nbDad.someScrub = someScrub;
          setTimeout(function() {
            nbDad.dadChecker = false;
            client.say(channel, 'nb dad now open OpieOP');
          }, 600000);
      } else if(dadChecker == false) {
          client.say(channel, `Dad has ${ dadCounter } inches of love for you today, ${ scrub  }.`);
      } else if(dadChecker == true) {
          client.say(channel, `Some scrub by the name of ${ winner } won the damn game. Check back again later.`);
      }
  }
}

export function chatInterval(client, annoyCounter) {
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
}
