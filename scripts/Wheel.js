import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
         }
    }
)

export const WheelStyle = () => {
    let html = "<ul>"
const listWheel = wheels.map((wheel) => {
    return  `<li>
    <select id="resource">
    <option value="0">Select Wheels...</option>
    <option value="1">Radial</option>
    <option value="2">Black Radial</option>
    <option value="1">Spoke Silver</option>
    <option value="1">Spole Black</option>
</select>
    </li>`
})

    html += listWheel.join("")

    html += "</ul>"
    return html
}
