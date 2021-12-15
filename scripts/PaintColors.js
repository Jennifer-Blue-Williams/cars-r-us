import { getPaintColors, setPaintColor } from "./database.js"

const paintColors = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paintColor") {
            setPaintColor(parseInt(event.target.value))
         }
    }
)

export const CarPaintColor = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listColor = paintColors.map((paintColor) => {
        return `<li>
        <select id="resource">
        <option value="0">Select Paint Color...</option>
        <option value="1">Silver</option>
        <option value="2">Midnight Blue</option>
        <option value="1">Firebrick Red</option>
        <option value="1">Spring Green</option>
    </select>
        </li>`
    })

    html += listColor.join("")
    html += "</ul>"

    return html
}

