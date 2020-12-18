function arrayPreviousLess(nums) {
    //  write code here.
     return nums.map( (el, i, arr) => {
        for( let j = i - 1; j>=0; j-- ){
            if( arr[j] < el ) return arr[j];
        }
        return -1;
    });
}
    
//     nums.reverse()
    
//     for(let i=0 ; i< nums.length ; i++)
//     {
//       let t= nums[i]
//       help_array(nums,i)
//       nums[i] === t ? nums[i] = -1 : nums [i]  
//      }
//      return  nums.reverse()
// }

//  function help_array (nums,i)
//  {
//     let k =0 
//     while(i+k < nums.length)
//     if(nums[i]>nums[i+k])
//     {
//         nums[i] = nums[i+k]
//         break;
//     }
//     else
//       k++;
//  }


/**
* Test Suite 
*/
describe('arrayPreviousLess()', () => {
    it('shift previous postions from the left to a smaller value or store -1', () => {
        // arrange
        const nums = [3, 5, 2, 4, 5,6,3];
        // [5,4,2,5,3]
        // act
        const result = arrayPreviousLess(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([-1, 3, -1, 2, 4,5,2]);
    });
});