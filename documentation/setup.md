# Setup and Maintenance

## Setup
  - Install Node.js (preferred 18.20.3)
  - Enter 'npm install' in the command line inside the folder.
  - Create an 'oauth.js' file in src with the following Lines
  - Take note that the your oauth should be the oauth code of your bot's twitch account:
```
export const USERNAME = '<Bot Username>';
export const TOKEN = 'oauth:<Bot OAuth Token>';
export const CHANNEL = '<Broadcaster Username>';
```
  - Enter 'node .' in the command line inside the folder.

### Getting your oauth
  - Go to dev.twitch.tv on your bot account and do the basic application setup for your bot account to get your client id. (Google it if you need this)
  - Go to this link entering the relevant details in the `<>` Tags
```
https://id.twitch.tv/oauth2/authorize?client_id=<CLIENT ID>
&redirect_uri=<REDIRECT URI>
&response_type=token
&scope=chat:read+chat:edit+channel:moderate
```
  - Entering the link should generate a link that looks something like this without the `<>` Tags on your browser
```
<REDIRECT URI>/#access_token=<OAUTH TOKEN>
&scope=chat%3Aread+chat%3Aedit+channel%3Amoderate&token_type=bearer
```

### Maintenance (In case you haven't used this for a long time)
  - Check in the node repository for the latest version of esm and tmi.js
  - Update the versions inside package.json
  - npm install and node .
  - Theoretically everything should work. 