// Q-1
function sayHello(){
    console.log("Hello,World!")
}
sayHello()
// Q-2
function displayWarning(){
    console.log("warning!System OverLoad!")
}
displayWarning()
// Q-3
function printStatus(){
    console.log("system Status: Active")
}
printStatus()
// Q-4
function intialiize(){
    console.log("intialization complete")
    shutDown()
}
function shutDown(){
    console.log("system Shutting Down")
}
intialiize()
// Q-5
function startProcess(){
    console.log("process Started")
    endProcess()
}
function endProcess(){
    console.log("process Ended")
}
startProcess()
// Q-6
function greetUser(name){
    console.log("Hello,uday!")
}
greetUser("uday")
greetUser("udaykiran")
// Q-7
function calculateSum(num1,num2){
    console.log(num1+num2)
}
calculateSum(10,20)
calculateSum(30,40)
// Q-8
function countDown(num){
    for(var i=num;i>=0;i--){
        console.log(i)
    }
}
countDown(5)
// Q-9
function checkEvenOdd(num){
    if(num%2==0){
        console.log("even")
    }
    else{
            console.log("odd")
        }
    
}
checkEvenOdd(10)
checkEvenOdd(15)
// Q-10
function beginSession(){
    console.log("session started")
    endSession()
}
function endSession(){
    console.log("session ended")
}
beginSession()