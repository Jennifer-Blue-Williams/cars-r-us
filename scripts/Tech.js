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

    const listTech = technologies.map((technology) => {
        return  `
        <option value="${technology.id}">${technology.package}</option>
 `
    })
    
html += listTech.join("")

    html += "</ul>"
    
    return html
}
