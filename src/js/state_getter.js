function getState(playerId) {
    let my_data = null

    jQuery.ajax({
        url: 'http://localhost:8080//simple-rest/' + playerId + '/state',
        async: false,
        dataType: 'json',
        success(json) {
            my_data = json
        }
    })

    return my_data

}
