import { getColorIterator } from "./utils/colors/color.js"
import rects from "./utils/grids/grid01.js"

function widget(key, draw) {
    
    let nextColor = getColorIterator(key)
    const gridSize = 500;

    draw.rect(gridSize, gridSize)
    .move(0, 0)
    .fill(nextColor()); 

    draw.rect(gridSize, gridSize)
        .move(500, 500)
        .fill(nextColor()); 
    
    draw.rect(gridSize, gridSize)
    .move(500, 0)
    .fill(nextColor()); 

    draw.rect(gridSize, gridSize)
        .move(0, 500)
        .fill(nextColor()); 

    for (let idx in rects) {
        let rect = rects[idx]
        let c = nextColor()
        let shape = key.next256() % 6
        let multi = shape * 13

        if (shape == 0) {
            draw.rect().size(rect.width, rect.height).move(rect.x, rect.y ).fill(c)
        }
        if (shape == 1) {
            draw.circle(rect.width).move(rect.x, rect.y).fill(c)
        }
        if (shape == 2) {
            let x1 = rect.x
            let y1 = rect.y 
            let x2 = rect.x + rect.width
            let y2 = rect.y 
            let x3 = rect.x + rect.width/2
            let y3 = rect.y + rect.height 
            draw.polyline([x1, y1, x2, y2, x3, y3]).fill(c)
        }
        if (shape == 3) {
            let x1 = rect.x
            let y1 = rect.y + rect.height 
            let x2 = rect.x + rect.width
            let y2 = rect.y + rect.height 
            let x3 = rect.x + rect.width/2
            let y3 = rect.y + 0 
            draw.polyline([x1, y1, x2, y2, x3, y3]).fill(c)
        }
        
        if (shape == 4) {
            draw.ellipse(rect.width, rect.height).move(rect.x, rect.y ).fill(c)
        }
        if (shape == 5) {
            let x = rect.x + rect.width / 2
            let y = rect.y + rect.height / 2 
            let radius = Math.min(rect.width, rect.height) / 2
            draw.polygon([x, y - radius, x + radius, y, x, y + radius, x - radius, y]).fill(c)
        }
        if (shape == 6) {
            let x = rect.x + rect.width / 2
            let y = rect.y + rect.height / 2 
            let radius = Math.min(rect.width, rect.height) / 2
            draw.path(`M${x},${y} L${x + radius},${y} A${radius},${radius} 0 1,0 ${x},${y - radius} Z`).fill(c)
        }
    }
}

export default widget
