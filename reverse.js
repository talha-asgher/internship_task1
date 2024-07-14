// Write a function to reverse a string

function reverse(str){

    let char_arr = [...str]

    for(let start = 0, end = str.length - 1; start<end; start++,end--){

        let temp = char_arr[start]
        char_arr[start] = char_arr[end]
        char_arr[end] = temp
    }

    return (char_arr.reduce((accumulator, currentValue) => accumulator + currentValue, ''))
}
let str = "talha"
str=reverse(str)
console.log(str)