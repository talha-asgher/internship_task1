//Create an array of objects and print the object with the highest value.

const obj_array = [
    { Fname: 'Talha', Lname : 'Asgher', value: 22 },
    { Fname: 'Laiba', Lname : 'Atique', value:20 },
    { Fname: 'Haseeb', Lname : 'Zahid', value: 12 }
    ];

const maxVal_obj = obj_array.reduce((accumilator,currVal)=>{

    if(accumilator[0]===currVal){

        return accumilator
    }
    else if(accumilator[0].value < currVal.value){
        return [currVal]
    }
    else if(accumilator[0].value > currVal.value){
        return accumilator
    }
    else{
        accumilator.push(currVal)
        return accumilator
    }
    
},[obj_array[0]])

console.log(maxVal_obj)