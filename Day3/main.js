function chunkyMonkey(values, size) {
     //write code here.
    return values.reduce((acc,value,index) =>{
    return( 
        values.slice(size*index,index===0? size :size*2*index).length ===0 ?
         acc :
         [...acc,values.slice(size*index,index===0? size :size*2*index)] )
      
    },[]
     )
     
//     let arr = []
   
     
//      for( let i = 0; i < values.length; i += size )
//     {
//       arr.push(values.slice(i,Math.min(i+size, values.length)))
   
//     }
    
//      return arr 
// }

/**
* Test Suite 
*/
describe('chunkyMonkey()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const values = [0,1,2,3 ,4,5,6,7,9,8];
        const size = 4;
        
        // act
        const result = chunkyMonkey(values, size);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([["a", "b"], ["c", "d"]]);
    });
});