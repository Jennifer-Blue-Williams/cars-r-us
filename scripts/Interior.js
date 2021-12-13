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
        return  `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.type}
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += listInterior.join("")

    html += "</ul>"
    return html
}

