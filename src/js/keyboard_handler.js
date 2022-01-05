const DIR_TRANSLATIONS = {37: "W", 38: "N", 39: "E", 40: "S"}

async function key_down_handler(e) {

    const dir = DIR_TRANSLATIONS[e.keyCode]

    async function waitGetAndPresentNewState() {
        await new Promise(r => setTimeout(r, 55));
        for (let i = 0; i < 5; i++) {
            try {
                let new_data = getState(playerId)
                presentState(new_data)
                break;
            } catch (ex) {
                // some problem on backend, will get better hopefully in meantime
                if (i === 5 - 1) {
                    console.log(ex)
                }
            }
        }
    }

    if (dir != null) {
        // move
        // console.log(dir)
        move(playerId, dir)
        await waitGetAndPresentNewState();
    }

    if (e.keyCode === 13) {
        activate(playerId)
        await waitGetAndPresentNewState();
    }

    // console.log(e)

}