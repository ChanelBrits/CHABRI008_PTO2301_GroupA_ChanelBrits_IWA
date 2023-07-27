let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

/* logCalc function calculates the result based on the input argument.
 * If input is a string, it is parsed into an integer and stored as 'isString',
 * else 'isString' remains null. The final result 'calculatedAsNumber' is
 * obtained by adding 1 to 'isString'. The function returns 'calculatedAsNumber'.
 */
const logCalc = (input) => { 
    const isString = typeof input === 'string' ? parseInt(calculated) : null;// true
    const calculatedAsNumber = isString + 1;
    return calculatedAsNumber;
};

/* calcUser function updates the 'calculated', 'user', and 'state' variables
 * based on the current 'calculated' value. It sets 'user' to 'John' and 'state'
 * to 'requesting' if 'calculated' is >= 2, otherwise sets 'state' to 'idle'.
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