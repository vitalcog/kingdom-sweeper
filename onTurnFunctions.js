const home_value = {
    x: null,
    y: null,
    land: null
}

const visible_land = []

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

findHome(world_units)