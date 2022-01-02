const known_entities = {
    "cz.shieldsup.cubicles.util.wall.Wall": ["#", "gray"],
    "cz.shieldsup.cubicles.character.chicken.Chicken": ["c", "yellow"],
    "cz.shieldsup.cubicles.character.player.Player": ["@", "red"],
    "cz.shieldsup.cubicles.item.levelitem.levelexit.LevelExit": [">", "white"],
}


function presentState(data) {

    console.log(data)
    const rendering_data = data['rendered_state']
    for (let i = 1; i < rendering_data['size_x']; i++) {
        for (let j = 1; j < rendering_data['size_y']; j++) {
            display.draw(i, j, ".", "dimgray");
        }
    }

    data['rendered_state']['entity_list'].forEach(entity => {
            let cname = entity['className']
            let presenting_detail = known_entities[cname]
            if (presenting_detail == null) {
                presenting_detail = ['X', 'red'];
            }
            display.draw(entity.x, entity.y, presenting_detail[0], presenting_detail[1])
        }
    )

}