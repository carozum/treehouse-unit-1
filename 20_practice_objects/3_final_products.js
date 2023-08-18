const products = [
    {
      name: "chair",
      inventory: 5,
      unit_price: 45.99
    },
    {
      name: "table",
      inventory: 10,
      unit_price: 123.75
    },
    {
      name: "sofa",
      inventory: 2,
      unit_price: 399.50
    }
  ];

// list of product name
function listProducts(arr){
    let names = [];
    for (let i=0; i<arr.length; i++){
        const product = arr[i];
        names.push(product.name);
    }
    return names;
}

const product_name = listProducts(products);
console.log(product_name);


// total value of products
function totalValue(arr){
    let total = 0;
    for (let i=0; i<arr.length; i++){
        const product = arr[i];
        total += product.unit_price * product.inventory;
    }
    return total;
}

console.log(totalValue(products));

