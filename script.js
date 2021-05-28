// Find Max
const findMax = (grades) => {
    let max = grades[0];
    let currentNumb = null;
    for (let i = 0; i < grades.length; i++) {
        currentNumb = grades[i]
        max = Math.max(max, currentNumb)
        }
    return console.log(max)
}

findMax(grades = [89, 45, 120, 90, 68, 90, 78, 54, 99]);


// Try to remove ALL OCCURRENCES an integer from an array
const tryRemoveFromArray = (array, n) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n){
            array.splice(i, 1) // remove 1 item at array's position i
        }
    }
    return console.log(array)
}

tryRemoveFromArray(grades, 90)

// Check if an integer is in Fibonacci
const isSquare = (number) => {
    return number > 0 && Math.pow(Math.sqrt(number), 2) == number;
}

const isFibonacci = (n) => {
    if(isSquare(5*(Math.pow(n,2))-4) || isSquare(5*(Math.pow(n, 2))+4)){
        return console.log(true)
    }
    else{
        return console.log(false)
    }
}
isFibonacci(8)