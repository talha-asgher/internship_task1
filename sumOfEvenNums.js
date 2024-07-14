//Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.

function even_sum(array){

    const sum = array.reduce((accumalator,currVal)=>{

        if(currVal%2===0){

            return accumalator+currVal
        }
        return accumalator
    },0)

    return sum
}

let array = [4,7,3,6,8,1,2]

const sum = even_sum(array)
console.log(sum)