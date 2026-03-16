array=[10, 20, 30];
const multi=array.forEach((arr)=> {
    return arr*2;
    });
console.log("The array value is:",multi);
//Answer for challenge: output is undefined, because forEach always provide undefined output using return keyword or not  inside of the program.