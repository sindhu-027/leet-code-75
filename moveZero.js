/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let nonZeroIndex = 0
    
    for(let i = 0; i< nums.length; i++){
        
        if(nums[i] !== 0){
            
        [nums[nonZeroIndex],nums[i]] = [nums[i],nums[nonZeroIndex]];
            
            nonZeroIndex++;
            
            
        }
    }
};

const nums = [0,1,0,3,12]
moveZeroes(nums)
console.log(nums)