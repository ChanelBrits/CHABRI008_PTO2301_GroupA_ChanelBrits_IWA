const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = Math.abs(parseInt(leoBalance) + parseFloat(sarahBalance))
const owedThousands = (Math.floor(owed / 1000))
const owedHundreds = ((owed % 1000)).toFixed(2);
const owedFormatted = `${owedThousands.toLocaleString({minimumFractionDigits: 2})} ${owedHundreds}`
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${Math.abs(leoBalance).toFixed(2)})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${Math.abs(sarahBalance).toFixed(2)})`
const total = `Total amount owed: R ${owedFormatted}`
const result = `${leo}\n${sarah}\n${divider}\n${total}\n${divider}`

console.log(result)