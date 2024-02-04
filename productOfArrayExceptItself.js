var productOfItself = function(nums){

    const n = nums.length;
    const prefixProducts = new Array(n);
    const suffixProducts = new Array(n);
    const answer = new Array(n)
    
    let product = 1;
    for(let i = 0; i < n ; i++){
      prefixProducts[i] = product;
      product *= nums[i];
    }
    product = 1;
    for(let i = n-1 ; i >= 0 ; i--){
    suffixProducts[i] = product;
    product *= nums[i];
    }
    for (let i = 0; i < n; i++) {
        answer[i] = prefixProducts[i] * suffixProducts[i];
    }
    return answer;
}

//example usage
const nums = [1, 2, 3, 4];
const result = productOfItself(nums);
console.log(result); // Output: [24, 12, 8, 6]