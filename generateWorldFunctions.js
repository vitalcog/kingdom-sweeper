
// terrainSelection generates random number 1-9, depending on number returns one of four string values
// also increments a counter for each type terrain
function terrainSelection() {
    let random_pick = Math.floor(Math.random() * 9) + 1
    if (random_pick === 1 || random_pick === 2 || random_pick === 3) {
        terrain.forest++
        return 'forest'
    }
    else if (random_pick === 4 || random_pick === 5 || random_pick === 6) {
        terrain.plains++
        return 'plains'
    }
    else if (random_pick === 7 || random_pick === 8) {
        terrain.mountains++
        return 'mountains'
    }
    else {
        terrain.desert++
        return 'desert'
    }
}

// generateLandColor checks the argument objects key: values to return a string value for a background color
// conditionals check for starting point (home), discovered status, and land type
function generateLandColor(arg) {
    if (arg.land_type === 'forest' && !arg.home && arg.discovered) {
        return '#005000'
    }
    else if (arg.land_type === 'plains' && !arg.home && arg.discovered) {
        return '#779e27'
    }
    else if (arg.land_type === 'mountains' && !arg.home && arg.discovered) {
        return '#8694a1'
    }
    else if (arg.land_type === 'desert' && !arg.home && arg.discovered) {
        return '#ffe0ae'
    }
    else if (arg.discovered !== true && arg.home !== true) {
        return 'rgba(0,0,0,.75)'
    }
    else {
        return 'darkred'
    }
}

function determineStartLocation(arg) {
    if (arg === starting_point) {
        return true
    }
    else {
        return null
    }
}