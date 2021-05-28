// variables
grades = [89, 45, 120, 90, 68, 90, 78, 54, 99]

// Function: Find Max function
const findMax = (grades) => {
    let max = grades[0];
    let currentNumb = 0;
    for (let i = 0; i < grades.length; i++) {
        currentNumb = grades[i]
        max = Math.max(max, currentNumb)
        }
    console.log(max)
    return max
}

findMax(grades);


// Function: Try to remove ALL OCCURRENCES an integer from an array
function tryRemoveFromArray(array, n){
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n){
            array.splice(i, 1) // remove 1 item at array's position i
        }
    }
    console.log(array)
    return array
}

tryRemoveFromArray(grades, 90)

// Function: Check if an integer is in Fibonacci
const isSquare = (number) => {
    return number > 0 && Math.pow(Math.sqrt(number), 2) === number;
}

const isFibonacci = (n) => {
    if(isSquare(5*(Math.pow(n,2))-4) || isSquare(5*(Math.pow(n, 2))+4)){
        console.log(true)
        return true;
    }
    else{
        console.log(false)
        return false;
    }
}
isFibonacci(8)