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

    const listColor = paintColors.map((paintColor) => {
        return `
        <option value="${paintColor.id}">${paintColor.color}</option>
      `
    })

    html += listColor.join("")
    html += "</ul>"

    return html
}

