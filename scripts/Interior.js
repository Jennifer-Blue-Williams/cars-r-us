import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
         }
    })

export const InteriorStyles = () => {
    let html = "<ul>"

    const listInterior = interiors.map((interior) => {
        return `
        <option value="${interior.id}">${interior.type}</option>
        `
    })

    html += listInterior.join("")

    html += "</ul>"
    return html
}

