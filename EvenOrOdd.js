// Write a function to check if a number is even or odd.

function evenORodd(num){

    if(!(num%2)){

        return "even"
    }
    return "odd"
}

const result = evenORodd(6)
console.log(result)