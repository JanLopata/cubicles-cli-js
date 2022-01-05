function move(playerId, dir) {
    let response = null

    jQuery.ajax({
        type: "POST",
        url: 'http://localhost:8080//simple-rest/' + playerId + '/move/' + dir,
        async: false,
        dataType: 'json',
        success(json) {
            response = json
        }
    })

    return response

}

function activate(playerId) {
    let response = null

    jQuery.ajax({
        type: "POST",
        url: 'http://localhost:8080//simple-rest/' + playerId + '/activate/level-item',
        async: false,
        dataType: 'json',
        success(json) {
            response = json
        }
    })

    return response
}
