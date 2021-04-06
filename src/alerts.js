export function hostedHandler (client, channel, username, viewers, autohost) {
  client.say(channel, `Praise you ${username} for the host of ${viewers}!`);
}

export function raidedHandler(client, channel, username, viewers) {
  client.say(channel, `We all appreciate ${username} for the raid of ${viewers}!`);
}

export function subscriptionHandler(client, channel, username, method, message, userstate) {
  client.say(channel, `Thank you ${username} for providing zee boss with money that he'll never be able to withdraw!`);
}

export function cheerHandler(client, channel, userstate, message)  {
  client.say(channel, `Thank you ${userstate.username} for the ${userstate.bits} bits that teh Boss will never get from Amazon!`);
}

export function giftPaidUpgradeHandler(client, channel, username, sender, userstate) {
  client.say(channel, `It is appreciated ${username} for continuing your gifted sub!`);
}

export function resubHandler(client, channel, username, months, message, userstate, methods) {
  const cumulativeMonths = userstate['msg-param-cumulative-months']
  client.say(channel, `Thank you @${username} for the ${cumulativeMonths} sub!`);
}

export function subGiftHandler(client, channel, username, streakMonths, recipient, methods, userstate) {
  client.say(channel, `Thank you @${username} for gifting a sub to ${recipient}}.`);
};

export function hostingHandler(client, channel, target, viewers) {
  if(viewers == 0) {
    client.say(channel, `Boss, we are hosting ${target} with no one watching!!`)
  } else {
    client.say(channel, `Boss, we are hosting ${target} with ${viewers} viewers!`)
  };
}
