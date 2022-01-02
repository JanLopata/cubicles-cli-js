const dimensions = {
    width: 79,
    height: 23
};
const display = new ROT.Display(dimensions);
document.body.appendChild(display.getContainer());

for (let i = 0; i < dimensions.width; i++) {
    for (let j = 0; j < dimensions.height; j++) {
        if (!i || !j || i + 1 === dimensions.width || j + 1 === dimensions.height) {
            display.draw(i, j, "#", "gray");
        } else {
            display.draw(i, j, ".", "dimgray");
        }
    }
}
display.draw(dimensions.width >> 1, dimensions.height >> 1, "@", "goldenrod");
