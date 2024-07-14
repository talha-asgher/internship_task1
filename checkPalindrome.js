// Write a function to check if a string is a palindrome

function palindrome(str){

    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for(let start = 0, end = str.length - 1; start<end; start++,end--){

        if(str[start]!==str[end]){

            return false
        }
    }
    return true
}

const result = palindrome("karak")
console.log(result)
