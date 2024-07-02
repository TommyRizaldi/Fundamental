//1
function getStatsWithoutSort(arr) {
    if (arr.length === 0) {
        return { lowest: null, highest: null, average: null };
    }

    let lowest = arr[0];
    let highest = arr[0];
    let sum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
        if (arr[i] > highest) {
            highest = arr[i];
        }
        sum += arr[i];
    }

    let average = sum / arr.length;

    return { lowest, highest, average };
}

let arr = [10, 5, 23, 18, 4, 45, 32];
let stats = getStatsWithoutSort(arr);
console.log(stats);

//2
function conWord(str) {
    if (str.length === 0) {
        return "";
    } else if (str.length === 1) {
        return str[0];
    } else {
        let result = str.slice(0, str.length - 1).join(', ') + ', and ' + str[str.length - 1];
        return result;
    }
}

let str = ["apple", "banana", "cherry", "date", "lime"];
let concatenatedString = conWord(str);
console.log(concatenatedString);
