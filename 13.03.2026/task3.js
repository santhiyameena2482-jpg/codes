const nums = [1, 2, 3, 4];
let result=nums.map((nums)=>{
    if(nums%2==0){
        return nums*2;
    }else{
         return nums*3;
    }
});
console.log(result);
