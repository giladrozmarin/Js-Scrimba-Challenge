function sumOddFibonacciNumbers(num) {
    //  write code here.
    let arrFib = [1,1]
    let i = 1;
    //Fibonacci formula : arrFib[i]+arrFib[i-1]
    while(arrFib[i]+arrFib[i-1] <= num )
        {
            arrFib.push(arrFib[i]+arrFib[i-1])
            i++
        }
    //step1 : filter (array => odd value only) step 2: reduce accumulator all value 
    return arrFib.filter(odd=>odd%2!=0).reduce((acc,i)=>acc+i);
}



/**
* Test Suite 
*/
describe('sumOddFibonacciNumbers()', () => {
    it('returns sum of all odd Fibonnci numbers', () => {
        // arrange
        const num = 10;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(10);
    });

    it('returns sum of all odd Fibonnci numbers 2nd example', () => {
        // arrange
        const num = 1000;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(1785);
    });
});