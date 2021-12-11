import Jimp from 'jimp';
import jimp  from 'jimp';

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


async function main() {
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

main();