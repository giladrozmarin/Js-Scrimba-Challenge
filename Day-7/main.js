function countVowelConsonant(str) {
  // write code here
  return str.split('').reduce((acc,value) => 
  {
   (value === 'a' || value ===  'e'  || value ===  'i'  || value ===  'o'  || value ===  'u' )  ? acc++ : acc=acc+2
   return acc
  }
  ,0) 
  
}



/**
* Test Suite 

*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        console.log(value.split(''))
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});