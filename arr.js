const arr=[10,20,30,40,50,60];

 arr.push(70)
 console.log(arr);//add 70 element 

 arr.pop()
 console.log(arr);// remove last element

 arr.unshift(0)
 console.log(arr);//add 0 beggining of array
 
 arr.shift()
 console.log(arr);//removes first element

 arr.includes(30)
 console.log(arr.includes(30));//check 30 exist or not

console.log(arr.slice(0,2));//

console.log(arr.join(":"));//

console.log(arr.reverse());//gives reverse of arr

console.log(arr.sort());// sort the current array element

for(i=0;i<arr.length;i++){
console.log(arr[i]);
 };
        

