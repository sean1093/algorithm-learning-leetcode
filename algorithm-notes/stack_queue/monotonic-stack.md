# Monotonic Stack

```js
var nextGreaterElement = function(nums) {
    const monoStack = [];
    const greaterArray = []; 

    for (let i= nums.length-1; i>=0; i--) {
        while (monoStack.length > 0 && nums[i] >= monoStack[monoStack.length-1]) {
            monoStack.pop();
        }
        greaterArray[i] = monoStack.length === 0 ? -1 : monoStack[monoStack.length-1];
        monoStack.push(nums[i]); 
    }

    return greaterArray;
}
```