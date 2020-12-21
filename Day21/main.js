function sumOfTwo(nums1, nums2, value) {
    //  write code here
    let ans = false
    let check = (a, b, v) => a + b === v;
    nums1.map(element => nums2.find(v => check(element, v, value) ? ans = true : ans));
    return ans
}


/**
* Test Suite 
*/
describe('sumOfTwo()', () => {
    it('returns true if a value can be found that by adding one number from each list', () => {
        // arrange
        const nums1 = [1, 2, 3];
        const nums2 = [10, 20, 30, 40];
        const value = 42;

        // act
        const result = sumOfTwo(nums1, nums2, value);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(true);
    });
});