import { Client } from 'twitter.js';
import { bearerToken } from './secrets';
import { makeQuote } from './quotes';
import { makeBlastin } from './Image';

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

// client.loginWithBearerToken(bearerToken);
RollDevito();

async function RollDevito() {
    let number = Math.ceil(Math.random() * 100);
    if (number > 0 && number < 10) {
        console.log('Make Blastin');
        makeBlastin();
    } else if (number > 9 && number < 60) {
        console.log('Make Quote');
        console.log(makeQuote());
    } else if(number > 59 && number < 80) {
        console.log('Todo Implement Merch');
    } else {
        console.log('Todo Implement Meme');
    }
}