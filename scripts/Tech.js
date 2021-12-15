import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
         }
    }
)

export const TechnologyPackage = () => {
    let html = "<ul>"

    const listTech = technologies.map(() => {
        return  `<li>
        <select id="resource">
        <option value="0">Select Technoloygy Package...</option>
        <option value="1">Basic</option>
        <option value="2">Navigation</option>
        <option value="1">Visbility</option>
        <option value="1">Ultra/option>
    </select>
        </li>`
    })
    
html += listTech.join("")

    html += "</ul>"
    
    return html
}
