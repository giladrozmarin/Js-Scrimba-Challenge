function differentSymbolsNaive(str) {
    //  write code here.
 
   const arr = []
   str.split("").map((val,i) => arr.includes(val) ? arr : arr.push(val) )
   return arr.length
    

   
}

//includes() push()  split()

/**
* Test Suite 
*/
describe('differentSymbolsNaive()', () => {
    it('returns count of unique characters', () => {
        // arrange
        const str = 'cabca';
        
        // act
        const result = differentSymbolsNaive(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });
});