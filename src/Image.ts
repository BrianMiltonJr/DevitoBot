import { bearerToken } from './secrets';
import jimp  from 'jimp';
import { Talaria } from './libs/Talaria/Talaria';

enum BackgroundColors {
    GREEN = 'green',
    RED = 'red',
    YELLOW = 'YELLOW',
    BLUE = 'blue',
    PINK = 'pink',
    PURPLE = 'purple',
    BLACK = 'black',
    WHITE = 'white',
    ORANGE = 'orange',
    BROWN = 'brown',
    CYAN = 'cyan',
    GRAY = 'gray',
    MAGENTA = 'magenta',
    MAROON = 'maroon',
    NAVY = 'navy',
    VIOLET = 'violet'
}


export async function makeBlastin() {
    let colors = Object.keys(BackgroundColors);
    let index = Math.floor(Math.random() * colors.length);
    const danny = await jimp.read('./images/danny-template.png');
    const smiley = await jimp.read('./images/smiley.jpg');
    const backdrop = new jimp(danny.getWidth(), danny.getHeight(), colors[index], (err, image) => {
        if (err) throw err;
    });

    let height = danny.getHeight() / 4;
    let width = danny.getWidth() / 4

    await smiley.resize(width, height);

    await danny.blit(smiley, 0, danny.getHeight() / 2);

    //To center I need to find the middle of A and offset B
    await backdrop.blit(
        danny,
        (backdrop.getWidth() / 2) - (danny.getWidth() / 2),
        (backdrop.getHeight() / 2) - (danny.getHeight() / 2)
    );

    const stat = await backdrop.write('./output-images/test.png');
}

function getProfilePicture(id: number) {
    let profile = new Talaria(`https://api.twitter.com/2/users/${id.toString()}?user.field=profile_image_url`, 'GET');
    profile.setRequestHeader('Authorization', `Bearer: ${bearerToken}`);
    profile.send();

    console.log(profile);
}