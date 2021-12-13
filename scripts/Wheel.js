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
Wheels = wheels.map((wheel) => {
        return  `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${metal.style}
        </li>`
    })


    html += listWheel.join("")

    html += "</ul>"
    return html
}
