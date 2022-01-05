const dimensions = {
    width: 79,
    height: 23
};
const display = new ROT.Display(dimensions);
document.body.appendChild(display.getContainer());
let playerId = 1

document.addEventListener("keydown", key_down_handler, false);