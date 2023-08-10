const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
const [
    [, a],
    [, b],
    [, c]
] = data.lists;

const result = []

const extractBiggest = () => {
    const lastValues = [a[a.length - 1], b[b.length - 1], c[c.length - 1]];
    const validValues = lastValues.filter((value) => value !== undefined);
    const maxValue = Math.max(...validValues);
    
    if (maxValue === a[a.length - 1]) {
        return a.pop();
    } else if (maxValue === b[b.length - 1]) {
        return b.pop();
    } else if (maxValue === c[c.length - 1]){
        return c.pop();
    };
};

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)

// const extractBiggest = () => {
//     const [
//         [, first],
//         [, second],
//         [, third],
//     ] =  data.lists;

//     const arrayList = [first, second, third];
   
//     const lastValues = arrayList.map((array) => (array.length > 0 ? array[array.length - 1] : null));
//     const biggestValue = Math.max(...lastValues);
//     console.log(biggestValue);

//     if (biggestValue !== null) {
//         for (const array in arrayList) {
//             if (lastValues[array] === biggestValue) {
//                 arrayList[array].pop();
//             };
//         };
//     };

//     return biggestValue;
// }