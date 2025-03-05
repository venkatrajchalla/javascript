// 1.create an array

 arr = [1,2,3,4,5]
 console.log(arr)

// 2 .Access an element

arr1 = [1,2,3,4,5]
console.log(arr1[2])

// 3.Change an Element

arr2=[1,2,3,4,5]
console.log(arr2)
arr2[1]=6
console.log(arr2)

// 4. Find Length

function length(arr3){
    return arr3.length
}
console.log(length([1,2,3,4,5]))

// 5.Add an Element (Push)
arr4 =[1,2,3,4,5]
console.log(arr4)
arr4.push(6)
console.log(arr4)

// 6.Remove the Last Element (Pop)

arr5 =[1,2,3,4,5]
console.log(arr5)
arr5.pop();
console.log(arr5)

// 7.Loop Through an Array

arr6=[1,2,3,4,5]
for(var i=0;i<arr6.length;i++)
{
    console.log(arr6[i])
}

// 8. Check if an Element Exists

arr7 =[1,2,3,4,5]
console.log(arr7.includes(5))

// 9. Copy an Array

arr8 = [1, 2, 3, 4, 5];
copy = arr8
console.log(copy);

// 10. Convert Array to String

let arr9 = ["VENKAT", "RAJ"];
let venky = arr9.join(" "); 

console.log(venky);