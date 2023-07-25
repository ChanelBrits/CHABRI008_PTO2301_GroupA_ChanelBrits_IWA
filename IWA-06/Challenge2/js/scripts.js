const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change 

if ((hourOfDay !== undefined && minuteOfDay !== undefined) && (hourOfDay === 0 && minuteOfDay === 0)) {
    const taxAsDecimal = parseInt(tax) / 100;
    const taxCalc = salary * taxAsDecimal;
    const afterTax = salary - taxCalc;
    const balance = afterTax - transport - food - rent;
    console.log(`Your balance is: R${balance.toFixed(2)}`);
}
	
