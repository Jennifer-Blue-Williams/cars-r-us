import { getOrders, getWheels, getInteriors, getTechnologies, getPaintColors } from "./database.js"



const buildOrderListItem = (order) => { 
    const wheels = getWheels()
    const interiors = getInteriors()
    const paintColors = getPaintColors()
    const technologies = getTechnologies()
    
    const foundWheel = wheels.find((wheel) => wheel.id === order.wheelId);
    
    const foundPaintColor = paintColors.find((paintColor) => paintColor.id === order.paintColorId);
    
    const foundInterior = interiors.find((interior) => interior.id === order.interiorId);
    
    const foundTechnology = technologies.find((technology) => technology.id === order.technologyId);

const totalCost = foundWheel.price + foundPaintColor.price + foundInterior.price + foundTechnology.price;

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
});
    return `<li>
    Order #${order.id} cost ${costString}
</li>`
}


export const Orders = () => {
 
    const orders = getOrders();
    let html = "<ul>"

    const listItems = orders.map((order) => buildOrderListItem(order));

    html += listItems.join("");
    html += "</ul>";

    return html;
};

