//     QUESTION -1

function findLarger(num1, num2, callback){
    return callback (num1,num2)+5
}
var result = findLarge(12,20,(num1, num2)=>{
    if (num1>num2){
        return num1
    }
    return num2
})
console.log(result)

    // QUESTION-2

function claculate(num1, num2, callback){
    return callback (num1, num2)*3
}    
var result = calculate(10,5,(num1, num2)=>{
    if(num1 > num2){
        return num1 + num2
    }
    if(num2 > num1){
        return num2 - num1

    }
})
console.log(result)

//  QUESTION - 3

function checkEvenOdd(num, callback){
     return callback(num)
}
var result = checkEvenOdd(8,(num)=>{
    if(num % 2 == 0){
        return "Even "
    }
    else{
        return "Odd"
    }
})
console.log(result)

//     QUESTION-4

function checkSign(num, callback){
    return callback (num)
}
var result = checkSign(-10, (num)=>{
    if(num > 0){
        return "Positive"
    }
    else if(num < 0){
        return "Negative"
    }
    else{
        return "Zero"
    }
})
console.log(result)

//      QUESTION-5

function mulitiplyConditionally(num1, num2, callback){
    return callback(num1,num2)*4
}
var result = multiplyConditionally(4, 6, (num1,num2)=>{
    if(num1 > num2){
        return num1 * num2
    }
    else if(num2 > num1){
        return num1 + num2
    }
    else{
        return num1
    }
})
console.log(result)