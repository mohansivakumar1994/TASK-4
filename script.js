let num = [1,2,3,4,5,6,7,8,9,10,11];
console.log('odd number are');
for (var i =2 ; i < 11 ; i += 2 ){
console.log(i);
};


let str = 'sachin tendulkar is great cricket player, dhoni is great captancy, shewag is fastest player';
let titleCaseStr = str.replace(/\b\w/g, c=> c.toUpperCase());
console.log(titleCaseStr);


function sum0fAll (arr) {
return arr.reduce((acc,curr)=> acc+curr);
};
console.log(sum0fAll([10,20,30,40,50,60,70,80,90,100]));


 
let array = [-5, -3, -2, -1, ...Array(20000).keys()]; 
function isPrime(num) {
for (let i = 2; i <= Math.sqrt(num); i++) {
if (num % i === 0) {
return false;
}
}
return num > 1;
}
console.log(array.filter(isPrime));


let arr = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];
let palindromes = arr.filter(w => {
let len = w.length;
for (let i = 0; i < len / 2; i++) {
if (w[i] == w[len - i - 1]) {
return true;
} else {
return false;
}
}
});
console.log(palindromes)

 
function findMedian(arr) {
arr.sort((a, b) => a - b)
let i = Math.floor(arr.length / 2)
return arr[i]
}
let result = findMedian([0, 1, 2, 4, 6, 5,] , [3, 9, 8, 7, 1, 4])
console.log(result)


let arr1 = [ "banana", "apple", "orange", "apple", "lemon", "pineapple", "lemon", "banana", "orange", "pineapple"];
function removeDuplicates(data) {
 return data.filter((value, index) => data.indexOf(value) === index);
}
console.log(removeDuplicates(arr1));


var rotatedArr = arr.map((e, i) => arr[arr.length-i-1])
console.log(rotatedArr)






