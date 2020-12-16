function insertDashes(arr) {
    // write code here
   
    return arr.split('').join('-').replace(/- -/g,' ')
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba ac";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a a-c");
    });
});