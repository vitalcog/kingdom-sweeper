const main_section = document.querySelector('.main-body-div')
const developer_world_map = document.createElement('div')

main_section.appendChild(developer_world_map)
developer_world_map.style.display = 'flex'
developer_world_map.style.flexDirection = 'row-reverse'
developer_world_map.style.flexWrap = 'wrap'
developer_world_map.style.width = `${5 * 50}px`

let world = [];

function generateWorld(arg) {
    let i = 0
    let x = 0
    let y = 0
    while (i < Math.pow(arg, 2)) {
        let land = {
            x: x,
            y: y,
        }
        world.unshift(land)
        x++
        if (x === arg) {
            y++
            x = 0
        }
        i++
    }
}

generateWorld(5)

console.log(world)

world.map((plots)=>{
    let plot = document.createElement('div')
    plot.innerHTML = `x:${plots.x} y:${plots.y}`
    plot.style.height = '45px'
    plot.style.width = '45px'
    plot.style.backgroundColor = 'blue'
    plot.style.border = '1px solid black'
    plot.style.color = 'white'
    developer_world_map.appendChild(plot)
})