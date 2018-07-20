const main_section = document.querySelector('.main-body-div')
const world_map = document.createElement('div')
const display = document.createElement('div')

const world_units = []
const size_of_world = 30
const terrain = {
    forest: 0,
    plains: 0,
    mountains: 0,
    desert: 0,
}
const starting_point = Math.floor(Math.random() * Math.pow(size_of_world, 2) + 1)

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
            discovered: false,
            claimed: false,
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

console.log(typeof world_units + ' world_units length = ' + world_units.length)
console.log(terrain)

world_units.map((units)=>{
    let unit = document.createElement('div')
    unit.style.boxSizing = 'border-box'
    unit.style.width = '16px'
    unit.style.height = '16px'

    unit.style.backgroundColor = generateLandColor(units)
    unit.classList.add('world-unit')

    unit.addEventListener("click", (e)=>{
        display.innerHTML = `x = ${units.x},<br> y = ${units.y},<br> ${units.land_type},<br> ${units.claimed ? 'claimed' : 'unclaimed'}`
        units.discovered = true
        unit.style.backgroundColor = generateLandColor(units)
    })

    world_map.appendChild(unit)
})


world_map.style.display = 'flex'
world_map.style.flexDirection = 'row-reverse'
world_map.style.flexWrap = 'wrap'
world_map.style.maxWidth = `${size_of_world * parseInt(world_map.childNodes[0].style.width)}px`

main_section.appendChild(world_map)

display.classList.add('display')
main_section.appendChild(display)