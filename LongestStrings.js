//Create an array of strings and print the longest string.

const str_array = ["js","seems","hard","lols"]
const maxLen_str = str_array.reduce((accumilator,currVal)=>{

    if(accumilator[0].length < currVal.length){
        return [currVal]
    }
    else if(accumilator[0].length > currVal.length){
        return accumilator
    }
    else{
        accumilator.push(currVal)
        return accumilator
    }
},[""])



console.log(maxLen_str)