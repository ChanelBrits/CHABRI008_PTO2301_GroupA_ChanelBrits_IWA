const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const validNumber = (string) => {
    return !isNaN(Number(string));
}

console.log('Primary phone is valid numerical string:', validNumber(primaryPhone))
console.log('Secondary phone is valid numerical string:', validNumber(secondaryPhone))