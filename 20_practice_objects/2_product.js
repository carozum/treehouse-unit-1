
const product = {
    name : "chair",
    inventory : 23,
    unit_price : 53.99
}


function addInventory(product, add){
    product["inventory"] += add;
    console.log(`${add} ${product["name"]}s added to the inventory.`);
}
addInventory(product, 3);
console.log(product);


function processSale(product, sold){
    product["inventory"] -= sold;
    console.log(`${sold} ${product['name']}s sold. `)
    return sold * product["unit_price"];
}
console.log(`Total sale = ${processSale(product, 10)}€`);
console.log(product);


