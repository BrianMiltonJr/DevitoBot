import { Client } from 'twitter.js';
import { bearerToken } from './secrets';
import { quotes } from './quotes';

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

client.loginWithBearerToken(bearerToken);

function RollDevito() {
    let number = Math.floor(Math.random() * 6);
    switch (number) {
        case 0:
            return '';
        case 1:
            return '';
        case 2:
            return '';
        case 3:
            return '';
        case 4:
            return '';
        case 5:
            return '';
        default:
            return '';
    }
}