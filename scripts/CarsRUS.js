
import { CarPaintColor } from "./PaintColors.js"
import { TechnologyPackage } from "./Tech.js"
import { Orders } from "./Orders.js"
import { InteriorStyles } from "./Interior.js"
import { WheelStyle } from "./Wheel.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    })

export const CarsRUs = () => {
    return `
        <h1>Cars 'R' Us</h1>

        <article class="choices">
            <section class="choices__paintColors options">
                <h2>Paint Colors</h2>
                ${CarPaintColor()}
            </section>
            <section class="choices__technologies options">
                <h2>Technologies</h2>
                ${TechnologyPackage()}
            </section>
            <section class="choices__interior options">
                <h2>Interiors</h2>
                ${InteriorStyles()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${WheelStyle()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

