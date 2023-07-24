const date = 2050
const user = 'student'
let count = 0

const publicHolidays = {
    January: [ "New Year’s Day" ],
    March: [ "Human Rights Day" ],
    April: [ "Family Day", "Freedom Day" ],
    June: [ "Youth Day" ],
    August: [ "Women’s Day" ],
    September: [ "Heritage Day" ],
    December: [ "Day of Reconciliation", "Christmas Day",],
}

if (date === 2050) {
    for (const month in publicHolidays) {
        for (const holiday of publicHolidays[month]) {
            if (holiday !== "Youth Day" && holiday !== "Christmas Day") {
                console.log(holiday);
                count = count + 1
            }
        }
    }
}

if (user === "student") {
    console.log(publicHolidays.June[0]);
    count = count + 1
} else if (user === "parent") {
    console.log(publicHolidays.December[1]);
    count = count + 1
}

console.log('Your status is:', user)
console.log('The year is:', date)
console.log('The total holidays is:', count)