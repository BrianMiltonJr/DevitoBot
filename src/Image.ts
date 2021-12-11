import jimp  from 'jimp';

async function main() {
    const danny = await jimp.read('./images/danny-template.png');
    const smiley = await jimp.read('./images/smiley.jpg');

    let height = danny.getHeight() / 4;
    let width = danny.getWidth() / 4

    await smiley.resize(width, height);

    await danny.blit(smiley, 0, danny.getHeight() / 2);

    const stat = await danny.write('./output-images/test.png');
}

main();