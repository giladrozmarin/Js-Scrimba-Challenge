function domainType(domains) {
    //  write code here.
    
     return domains.join('.').split('.').map( x => ( x==='org' ? 'organization': null) ||( x ==='com' ? 'commercial' : null)  || (x==='info' ? 'information' : null) || (x==='net' ? 'network' :null)).filter(x => x)
    
   
}



/**
* Test Suite 
*/
describe('domainType()', () => {
    it('returns list of domain types', () => {
        // arrange
        const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
        
        // act
        const result = domainType(domains);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["organization", "commercial", "network", "information"]);
    });
});