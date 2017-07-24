var tmi = require('tmi.js');

var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "nightbot96",
    password: ""
  },
  channels: ["nightbox69"]
};

var client = new tmi.client(options);
var kappaCounter = 0;

client.connect();

function shamelessPlug() {
  client.say("nightbox69", "If you guys actually managed to like boss's stream (a statistical impossibility) consider hitting the follow button for more moronic speedruns that will hold no bearing to World Record. Kappa");
};

function srsBznz() {
  client.say("nightbox69", "Serious Talk: Nightbot96 is at version 1.0. Currently, has no actual use and upgrades to be added at the Strimmer's discretion and lack of laziness.");
};

function soBad() {
  client.say("nightbox69", "2 Na");
}

function twitterPlug() {
  client.action("nightbox69", "is forcibly ordered to tell people to (not) follow his boss at https://twitter.com/nightbox69");
}

function discordPlug() {
  client.say("nightbox69", "Boss has a discord channel. Shame on him. https://discord.gg/y36BCNb");
}


client.on('chat', function(channel, user, message, self) {
  if(message === "nb intro") {
    client.say("nightbox69", "Hello! I am the 96th Version of Nightbot to be replaced immediately when boss acquires Nightbot69. Kappa");
    setTimeout(srsBznz, 15000);
  }

  else if(message === "nb twitter") {
    setInterval(twitterPlug, 1800000);
  }

  else if(message === "nb games") {
    client.say("nightbox69", "Currently, boss has a FFX Any% PC Personal Best of 9:51:39 (sub 10 goal has been hit). He will run Chrono Cross Good Ending Any% next and FF8 Any% in the near future. He also plans to speedrun most of the games his friends bought him on steam for his birthdays that he has never touched.");
  }

  else if(message === "nb shutup") {
    client.say("nightbox69", "How about YOU SHUT UP AND DO YOUR SPEEDRUNS HUH??");
  }

  else if(message === "nb gitgud") {
    client.say("nightbox69", "Why yes boss blame your lack of brain power to speedrunning a very simple game where all resources has been made available to you over to game crashes. PogChamp");
  }

  else if(message === "nb lowqual") {
    client.say("nightbox69", "Streams at home is gimped to 360p and 50kbps bitrate. Stream would drop frames by a lot and will be better during weekends.");
  }

  else if(message === "nb race") {
    client.say("nightbox69", "Watch the other guys beat the snot out of my boss: http://kadgar.net/live/AngieYuna/ChakesSpeedruns/ZellyFF/Nightbox69");
  }

  else if(message === "nb go") {
    client.say("nightbox69", "What do you call a fish made of two sodium atoms?");
    setTimeout(soBad, 60000);
  }

  else if(message === "nb discord") {
    setInterval(discordPlug, 1800000);
  }

  else if(message === "nb plug") {
    if(user.username === "nightbox69") {
      client.say("nightbox69", "You actually want me to advertise your channel?? Sure. Kappa");
    } else {
      client.say("nightbox69", "Error Found: Attempting to Advertise Annoying Strimmer.");
    }
  }
});

client.on('connected', function(address, port) {
  client.say("nightbox69", "I'm awake boss, I'm awake. Stop nudging the command prompt you sick man.");
  setInterval(shamelessPlug, 1800000); //1800000
});

client.on("hosted", function (channel, username, viewers, autohost) {
    client.say("nightbox69", "Yo " + username.username + "!! Thank you for hosting my boss with and I'm sorry that you had to bring people to watch such a shit strim. Kappa");
});