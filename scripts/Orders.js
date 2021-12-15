import { getOrders, getWheels, getInteriors, getTechnologies, getPaintColors } from "./database.js"

const orders = getOrders()
const wheels = getWheels()
const interiors = getInteriors()
const paintColors = getPaintColors()
const technologies = getTechnologies()


const buildOrderListItem = (order) => { 
    const foundWheel = wheels.find((wheel) => wheel.id === order.wheelId);
    
    const foundPaintColor = paintColors.find((paintColor) => paintColor.id === order.paintColorId);
    
    const foundInterior = interiors.find((interior) => interior.id === order.interiorId);
    
    const foundTechnology = technologies.find((technology) => technology.id === order.technologyId);

const totalCost = foundWheel.price + foundPaintColor.price + foundInterior.price + foundTechnology;

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
});
    return `<li>
    Order #${order.id} cost ${costString}
</li>`
}


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders();
    let html = "<ul>"

    const listItems = orders.map((order) => buildOrderListItem(order));

    html += listItems.join("");
    html += "</ul>";

    return html;
};

