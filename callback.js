
//TASK-1

function processNumbers(a,b,callback){
    return callback(a,b);
}
var result = processNumbers(3,4, function(x , y){
  return x + y
})
   

//TASK-2

function greet (callback){
 return callback ("alice!")
}
let res = greet (function(name){
    return "hello" +""+ name
})


//TASK-3

function calculate (num5,num6,callback){
    return callback(num5,num6)
}
let result = calculate (10,5 (function(num5,num6){
    console.log("difference:",result)
}))