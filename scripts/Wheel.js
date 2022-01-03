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
    return  `
    <option value="${wheel.id}">${wheel.style}</option>
    
`
})

    html += listWheel.join("")

    html += "</ul>"
    return html
}
