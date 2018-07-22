const main_section = document.querySelector('.main-body-div')
const world_map = document.createElement('div')
const display = document.getElementById('display')
const display_info = document.createElement('p')
const button = document.querySelector('button')

const world_units = []
const size_of_world = 25
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
            discovered: determineStartLocation(i),
            claimed: determineStartLocation(i),
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

displayWorld(world_units)

let counter = 0
button.addEventListener('click', (e)=>{
    findHome(world_units)
    world_units[counter].discovered = true
    counter ++
    determinExploredLands(world_units)
    world_map.innerHTML = null;
    displayWorld(world_units)
})


world_map.style.display = 'flex'
world_map.style.flexDirection = 'row-reverse'
world_map.style.flexWrap = 'wrap'
world_map.style.maxWidth = `${size_of_world * 18}px`

main_section.appendChild(world_map)

display.classList.add('display')
display.appendChild(display_info)
main_section.appendChild(display)