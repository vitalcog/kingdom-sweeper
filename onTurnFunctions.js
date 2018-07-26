const home_value = {
    x: null,
    y: null,
    land: null
}

const visible_land = []

const resourceObject = {
    food: 0,
    wood: 0,
    ore: 0,
    gold: 0,
}

function findHome(arg) {
    for (let i = 0; i < arg.length; i++) {
        if(arg[i].home) {
            home_value.x = arg[i].x
            home_value.y = arg[i].y
            home_value.land = arg[i].land_type
            console.log(home_value, 'iterations of loop = ' + i)
            break
        }
    }
}

function determinExploredLands(arg) {
    for (let i = 0; i < arg.length; i++) {
        let unit = arg[i]
        for (let ii = 0; ii < arg.length; ii++) {
            let unit2 = arg[ii]
            if (
                unit2.claimed && unit.x === unit2.x -1 && unit.y === unit2.y -1 ||
                unit2.claimed && unit.x === unit2.x && unit.y === unit2.y -1 ||
                unit2.claimed && unit.x === unit2.x +1 && unit.y === unit2.y -1 ||

                unit2.claimed && unit.x === unit2.x -1 && unit.y === unit2.y ||
                unit2.claimed && unit.x === unit2.x && unit.y === unit2.y ||
                unit2.claimed && unit.x === unit2.x +1 && unit.y === unit2.y ||
                
                unit2.claimed && unit.x === unit2.x -1 && unit.y === unit2.y +1 ||
                unit2.claimed && unit.x === unit2.x && unit.y === unit2.y +1 ||
                unit2.claimed && unit.x === unit2.x +1 && unit.y === unit2.y +1
            ) {
                arg[i].discovered = true
            }
        }
    }
}

function resourceGrowth(arg) {
    for (let i = 0; i < arg.length; i++) {
        let unit = arg[i]
        if(unit.discovered && unit.land_type === 'forest') {
            resourceObject.wood++
        }
        else if (unit.discovered && unit.land_type === 'plains') {
            resourceObject.food++
        }
    }
    console.log(resourceObject)
}