const value = "3"
console.log(`The value is ${parseInt(value) + 4 + parseInt(value)}`)

/* The original console.log statement concatenated the values together, which
 * resulted in 343 instead of 10. The reason for this is because value is a string.
 */