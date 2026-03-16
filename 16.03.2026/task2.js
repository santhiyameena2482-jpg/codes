// const nums = [1, 2, 3, 4];
// let result=nums.map((num)=>{
//     if(num%2==0){
//       return num*2;
//     }else{
//         return num*3;
//      }});
//      console.log(result);
    
  const nums = [1, 2, 3, 4];
  let result=nums.map((_,num)=>{
    if(num%2==0){
      return num*2;
    }else{
         return num*3;
    }});
    console.log(result);