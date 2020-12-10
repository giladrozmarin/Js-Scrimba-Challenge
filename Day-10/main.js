function adjacentElementsProduct(nums) {
    //  write code here.
   return Math.max(...nums.map((k,v)=>nums[v+1]*k).filter(v => v))
}



/**
* Test Suite 
*/
describe('adjacentElementsProduct()', () => {
    it('returns largest product of adjacent values', () => {
        // arrange
        const nums = [3, 6, -2, -5, 7, 3];
        
        // act
        const result = adjacentElementsProduct(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(21);
    });
});