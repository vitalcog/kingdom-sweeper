
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
    if (arg.land_type === 'forest' && arg.discovered) {
        return '#005000'
    }
    else if (arg.land_type === 'plains' && arg.discovered) {
        return '#779e27'
    }
    else if (arg.land_type === 'mountains' && arg.discovered) {
        return '#8694a1'
    }
    else if (arg.land_type === 'desert' && arg.discovered) {
        return '#ffe0ae'
    }
    else if (arg.discovered !== true && arg.home !== true) {
        return 'rgba(0,0,0,.75)'
    }
    else {
        return 'darkred'
    }
}

function determineStartLocation(arg, arg2) {
    if (arg === arg2) {
        return true
    }
    else {
        return false
    }
}

function displayWorld(arg) {
    determinExploredLands(arg)
    resourceGrowth(arg)
    for (let i = 0; i < arg.length; i++) {
        let unit = arg[i]
        let land_node = document.createElement('div')
    
        land_node.style.boxSizing = 'border-box'
        land_node.style.height = `${unit_size}px`
        land_node.style.width = `${unit_size}px`
        land_node.style.backgroundColor = generateLandColor(unit)
        land_node.classList.add('world-unit')
        if (unit.dragon) {
            console.log('unit.dragon was true! ' + 'x = ' + unit.x + ' y = ' + unit.y)
            land_node.id = 'dragon'
            land_node.style.backGroundImage = 'url("./assets/dragon-icon.png"'
        }
        if (unit.home) {
            land_node.id = 'home'
            land_node.style.backGroundImage = 'url("./assets/dragon-icon.png"'
        }
    
        land_node.addEventListener("click", (e)=>{
            unit.claimed = true
            display_info.innerHTML = 
                `<br> x = ${unit.x},
                <br> y = ${unit.y},
                <br> ${unit.land_type},
                <br> ${unit.claimed ? 'claimed' : 'unclaimed'},
                <br> ${unit.discovered ? 'discovered' : 'undiscovered'}`
            land_node.style.backgroundColor = generateLandColor(unit)
        })
    
        world_map.appendChild(land_node)
    }
}