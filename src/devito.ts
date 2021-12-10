import { Client } from 'twitter.js';
import { bearerToken } from './secrets';

const client = new Client({
    events: [ 'FILTERED_TWEET_CREATE' ]
});

client.on('ready', async () => {
    console.log(`Logged in as ${client.me?.username}`);

    await client.filteredStreamRules.create({
        value: '',
        tag: 'Send me tweets of all my followers'
    });
});

client.on('filteredTweetCreate', async tweet => {
    console.log(tweet.text);
    await tweet.like();
});

client.loginWithBearerToken(bearerToken)