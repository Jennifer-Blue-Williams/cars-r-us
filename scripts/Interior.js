import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
         }
    }    
)

export const InteriorStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listInterior = interiors.map((interior) => {
        return `<li>
        <select id="resource">
        <option value="0">Select Interior...</option>
        <option value="1">Beige Fabric</option>
        <option value="2">Charcoal Fabric</option>
        <option value="1">White Leather</option>
        <option value="1">Black Leather/option>
    </select>
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += listInterior.join("")

    html += "</ul>"
    return html
}

