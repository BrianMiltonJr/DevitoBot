export const quotes = [
    "“I've been to the Leaning Tower of Pisa. It's a tower, and it's leaning. You look at it, but nothing happens, so then you look for someplace to get a sandwich.”",
    "“The whole point of love is to put someone else's needs above your own.”",
    "“Everybody needs money. That's why they call it money.”",
    "“There are two dilemmas that rattle the human skull: How do you hang on to someone who won't stay? And how do you get rid of someone who won't go?”",
    "“Of course I've got lawyers. They are like nuclear weapons, I've got em 'cause everyone else has. But as soon as you use them they screw everything up.”",
    "“It's fun to be on the edge. I think you do your best work when you take chances, when you're not safe, when you're not in the middle of the road, at least for me, anyway.”",
    "“I climbed like a billion stairs... its not like I can take them two at a time.”",
    "“I'm shooting in Brooklyn, we've got all kinds of crap going on, and I'm all alone now in a big hotel suite that you can't believe the size of it and a thing sticks in my foot and I just think it's the funniest thing that's ever happened to me.”",
    "“In this movie, you have all the things you love from Tim. All the magic and the whimsy and the surreal, but he also has a fantastic story of a father and son that really gets under your skin.”",
    "“It don't care whether I'm good enough. It don't care whether I snore or not. It don't care which God I pray to. There are only three things with that kind of unconditional acceptance: Dogs, donuts, and money.”",
    "“What you do with it and things like that, but I basically chose this after I read it because I thought it was different and funny and unique and dark - things that I like to do.”",
    "“So, you pick this stuff here and this stuff there and then you see things in certain ways and you start visualizing and thank God I get the chance to do this. It's really the greatest thing in the whole wide world.”",
    "“I'll tell you one thing, it's a cruel, cruel world.”",
    "“I don't look ahead. I'm right here with you. It's a good way to be.”",
    "“It's just an ice bucket with a bottle in it. The two flute glasses are little tray. I got to shut the curtains. I'm in my boxer shorts and shirt. I'm going to take a bath and go to bed. But I want to shut the blinds so it's really dark in the room.”",
    "“Even if one doesn't smoke pot, one has to see the benefits of decriminalizing it.”",
    "“In order for the light of gratitude and happiness to shine so brightly, the darkness of how it could be worse must be present.”",
    "“I don't know. I think it's funny! I think it's funny! I go, what? It's so absurd. I'm alone.”",
    "“What do you call 500 lawyers lying on the bottom of the Ocean? A good start..”",
    "“A bad salesman will automatically drop his price. Bad salesmen make me sick.”",
    "“I'm always studying and I've been doing it for a long time now.”",
    "“The son has always felt like he was a footnote in one of the stories the father tells. The father is an amazing storyteller and one of the tales that he tells is how he met his wife.”",
    "“We did 'Erin Brockovich,' we did 'Man on the Moon,' we did 'Living Out Loud,' but now I'm going to keep going.”",
    "“We don't even know if we're in this room. We could be in a turtle's dream in outer space.”",
    "“A tree falls the way it leans. Be careful the way you lean.”",
    "“People come into your lives who you have a good time with, and time goes by and you still have a good time with them and you do stupid stuff with them. To me, that's life.”",
    "“School? It's out of the question. Who would be here to sign for the packages?”",
    "“I am self-centred. I just adore myself.”",
    "“Most men somewhere in their psyche are still dragging women around by their hair.”",
    "“There are two dilemmas that rattle the human skull: How do you hang on to someone who won't stay? And how do you get rid of someone who won't go?”",
    "“I'll watch Ricky Gervais in anything he does. The guy's hilarious.”",
    "“What do you call 500 lawyers lying on the bottom of the ocean? A good start.”",
    "“I didn't go to college. I don't know anybody who did. Bunch of hippies and cesspool salesmen, ha ha ha ha...”",
    "“There are only three things with that kind of unconditional acceptance: Dogs, donuts, and money.”"
];

export function makeQuote(): string {
    let index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}