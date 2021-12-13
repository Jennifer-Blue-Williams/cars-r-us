/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    paintColors: [
        { id: 1, color: "Silver", price: 300 },
        { id: 2, color: "Midnight Blue", price: 500 },
        { id: 3, color: "Firebrick Red", price: 600 }
        { id: 4, color: "Spring Green", price: 700 }
    ],
    interiors: [
        { id: 1, type: "Beige Fabric", price: 200 },
        { id: 2, type: "Charcoal Fabric", price: 400 },
        { id: 3, type: "White Leather", price: 700 },
        { id: 4, type: "Black Leather", price: 850 }
      
    ],
    wheels: [
        { id: 1, style: "Radial", price: 100.29 },
        { id: 2, style: "Radial Black", price: 350.20 },
        { id: 3, style: "Spoke Silver", price: 420.95 },
        { id: 4, style: "Spoke Black", price: 500.13 }
    ],
    technologies: [
        { id: 1, package: "Basic", price: 100.29 },
        { id: 2, package: "Navigation", price: 560.49 },
        { id: 3, package: "Visibility", price: 728.42 },
        { id: 4, package: "Ultra", price: 1200.00 }
    ],
    customOrders: [
        {
            id: 1,
            wheelId: 3,
            paintColorId: 2,
            interiorId: 3,
            technologyId: 4,
            timestamp: 1614659931693
        }
        
    ],

    orderBuilder: {},
}

export const getPaintColors = () => {
    return database.paintColors.map(paintcolor => ({...paintcolor}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getTechnologies = () => {
    return database.technology.map(technology => ({...technology}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}



export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}


export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}