
function factorial(number)
{
    const numbers = Array.from({ length: number }, (_, index) => index + 1);
    let factorial=numbers.reduce((accumulator,current)=>
    {
       accumulator=accumulator*current
       return accumulator
    }
    ,1)

    return factorial
}

const result = factorial(5)
console.log(result)
