const main_section = document.querySelector('.main-body-div')
const world_map = document.createElement('div')
const land_stat_display = document.createElement('div')

const world_units = []
const size_of_world = 30
const terrain = {
    forest: 0,
    plains: 0,
    mountains: 0,
    desert: 0,
}
const starting_point = Math.floor(Math.random() * Math.pow(size_of_world, 2) + 1)

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

function generateLandColor(arg1, arg2) {
    if (arg1 === 'forest' && arg2 !== true) {
        return '#005000'
    }
    else if (arg1 === 'plains' && arg2 !== true) {
        return '#779e27'
    }
    else if (arg1 === 'mountains' && arg2 !== true) {
        return '#8694a1'
    }
    else if (arg1 === 'desert' && arg2 !== true) {
        return '#ffe0ae'
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

function generateWorld(arg) {
    let i = 0
    let x = 0
    let y = 0
    while (i < Math.pow(arg, 2)) {
        let land = {
            x: x,
            y: y,
            land_type: terrainSelection(),
            home: determineStartLocation(i),
        }
        world_units.unshift(land)
        x++
        if (x === arg) {
            y++
            x = 0
        }
        i++
    }
}

generateWorld(size_of_world)

console.log(world_units)
console.log(terrain)

world_units.map((units)=>{
    let unit = document.createElement('div')
    unit.style.boxSizing = 'border-box'
    unit.style.width = '16px'
    unit.style.height = '16px'

    unit.style.backgroundColor = generateLandColor(units.land_type, units.home)
    unit.classList.add('world-unit')

    unit.addEventListener("click", (e)=>{
        land_stat_display.innerHTML = `x = ${units.x},<br> y = ${units.y},<br> ${units.land_type}`
        units.land_type = 'desert'
        unit.style.backgroundColor = generateLandColor(units.land_type, units.home)
    })

    world_map.appendChild(unit)
})


world_map.style.display = 'flex'
world_map.style.flexDirection = 'row-reverse'
world_map.style.flexWrap = 'wrap'
world_map.style.maxWidth = `${size_of_world * parseInt(world_map.childNodes[0].style.width)}px`

main_section.appendChild(world_map)


land_stat_display.style.width = '80px'
land_stat_display.style.marginLeft = '25px'

main_section.appendChild(land_stat_display)