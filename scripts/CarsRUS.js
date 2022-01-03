
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
                <select name="paintColor">
                <option value="0">Select Paint Color...</option>
                ${CarPaintColor()}
                </select>
            </section>
            <section class="choices__technologies options">
                <h2>Tech Package</h2>
                <select name="technology">
                <option value="0">Select Technoloygy Package...</option>
                ${TechnologyPackage()}
                </select>
            </section>
            <section class="choices__interior options">
                <h2>Interiors</h2>
                <select name="interior">
                <option value="0">Select Interior...</option>
                ${InteriorStyles()}
                </select>
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                <select name="wheel">
    <option value="0">Select Wheels...</option>
                ${WheelStyle()}
                </select>

            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}

