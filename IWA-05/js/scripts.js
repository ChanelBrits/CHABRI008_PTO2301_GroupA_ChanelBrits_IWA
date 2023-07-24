const FREE_WARNING = 'Free shipping only applies to single customer orders';
const FREE_SHIPPING = 'Your shipping is free';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

/* Shipping costs */
const NAM = 600;
const RSA = 400;
const OTHER = 800;

const customerLocation = 'RSA';
const customers = 1;

let currency = null;
let shipping = null;

/* Calculates currency and shipping charges based on the customerLocation */
if (customerLocation === 'RSA') {
    currency = 'R'
    shipping = 400
} else if (customerLocation === 'NAM') {
    currency = '$'
    shipping = 600
} else if (customerLocation === 'OTHER') {
    currency = '$'
    shipping = 800
} else if (customerLocation === 'NK') {
    currency = '$'
    shipping = null
    console.log(BANNED_WARNING)
}

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

const calcCart = shoes + toys + shirts + batteries + pens;


if (calcCart >= 1000 && ((customerLocation === 'RSA' || customerLocation === 'NAM') && customers === 1)) {
    shipping = 0;
    console.log(FREE_SHIPPING);
} else if (calcCart >= 1000 && ((customerLocation === 'RSA' || customerLocation === 'NAM') && customers > 1)) {
    console.log(FREE_WARNING);
}

console.log(`Your cart total is: ${currency}${calcCart}`);
console.log(`Your shipping costs are: ${currency}${shipping}`);
console.log(`Your total including shipping is: ${currency}${calcCart + shipping}`);