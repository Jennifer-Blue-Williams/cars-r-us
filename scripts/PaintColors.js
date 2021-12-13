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
            <input type="radio" name="paintColor" value="${paintColor.id}" /> ${paintColor.color}
        </li>`
    })

    html += listColor.join("")
    html += "</ul>"

    return html
}

