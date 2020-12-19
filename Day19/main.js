function alphabetSubsequence(str) {
    //  write code here.
 return  str.split('').map((val,i) => val <str[i+1] ? true : false).slice(0,str.length-1).every(Boolean) 
    
}



/**
* Test Suite 
*/
describe('alphabetSubsequence()', () => {
    it('returns false when it has duplicate letters', () => {
        // arrange
        const str = 'abcdefgg';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 1: ", false);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when NOT in ascending a - z order', () => {
        // arrange
        const str = 'cdce';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });
    
    it('returns true whenno duplicates and is ascending a - z order ', () => {
        // arrange
        const str = 'acez';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 3: ", result);
        
        // assert
        expect(result).toBe(true);
    });
});