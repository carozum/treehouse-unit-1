
/**
 * Calculates the area of a rectangle.
 * @param {number} width - width of the rectangle
 * @param {number} height - height of the rectangle
 * @returns {number} the area of the rectangle
 * 
 */

function rectArea(width, height){
    return width * height;
}


/**
 * Calculates the volume of a rectangular prism.
 * @param {number} width - width of the prism
 * @param {number} height - height of the prism
 * @param {number} length - length of the prism
 * @returns {number} the volume of the prism
 */


function prismVolume(width, height, length){
    return width * height * length;
}

/**
 * Calculates the area of a circle.
 * @param {number} radius -radius of the circle
 * @returns {number} area of the circle
 * 
 */

function circleArea(radius){
    return Math.PI * radius ** 2;
}

/**
 * calculates the volume of a sphere.
 * @param {number} radius - radius of the sphere
 * @returns {number} the volume of the sphere
 * 
 */

function sphereVolume(radius){
    return (4 /3) * Math.PI * radius ** 3;
}


document.querySelector('body').innerHTML = `
    <p>Area of rectangle that is 5 wide and 22 tall : ${rectArea(5, 22)}</p>
    <p>Volume of a rectangular prism that is 4.5 x 12.5 x 17.4 : ${prismVolume(4.5, 12.5, 17.4)}</p>
    <p>Area of a circle that with a radius of 7.2 : ${circleArea(7.2)}</p>
    <p>Volume of a sphere with a radius of 7.2 : ${sphereVolume(7.2)}</p>
`;








