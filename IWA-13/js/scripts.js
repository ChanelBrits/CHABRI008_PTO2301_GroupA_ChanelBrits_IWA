let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

/* 
 * Evaluates the input and determines if it is a string. If true, it will parse
 * the string to an integer and add 1. If false, it will return null.
 * @param {string} input
 */
const logCalc = (input) => { 
    const isString = typeof input === 'string' ? parseInt(calculated) : null;
    const calculatedAsNumber = isString + 1;
    return calculatedAsNumber;
};

/* 
 * Runs the logCalc function and adds 1 to the result. If the result is greater
 * and equal to 2, it change the user and state to 'requesting'. If the result is greater than
 * 3, it will set the state variable to 'idle'.
 */
const calcUser = () => {
    calculated = logCalc(calculated) + 1;
    if (calculated >= 2) {
        user = 'John';
        state = 'requesting';
    } else if (calculated > 3) {
        state = 'idle';
    };
};

const checkUser = () => {
	if (state === 'requesting' && calculated > 2) {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()