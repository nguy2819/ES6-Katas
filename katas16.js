// 16: object-literal - computed properties
// To do: make all tests pass, leave the assert lines unchanged!

describe('Object literal properties may be computed values', () => {

    it('a computed property `x` needs to be surrounded by `[]`', () => {
      const propertyName = 'x';
      const obj = {[propertyName]: 1}; //changed 2 to 1 to match the result in assert.equal
      //in the past: const obj = {[propertyName]: 2};
      assert.equal(obj.x, 1);
    });
  
    it('can also get a function assigned', () => {
      const key = 'func';
      const obj = {[key]() {return 'seven'}};
      //added () after the [key] and added a return to turned it into obj.func() into a function
      assert.equal(obj.func(), 'seven');
    });
  
    it('the key may also be the result of a function call', () => {
      const getName = 'propertyName';
      //delete the unneeded () and =>
      const obj = {[getName]() {return 'seven'}};
      assert.equal(obj.propertyName(), 'seven');
    });
  
    it('the key can also be constructed by an expression', () => {
      const what = 'Key';
      const obj = {['proper' + 'tyName']: what};
      //changed "null" to "what" and added 'tyName' so what propertyName = what
      assert.equal('propertyName' in obj, true);
    });
    
    //ANOTHER WAY
    //const what = 'tyName';
    //const obj = {['proper' + what]: null};
    //assert.equal('propertyName' in obj, true)
  
    it('accessor keys can be computed names too', () => {
      const obj = {
        get ['key']() {return 1} 
        //Changed set to get and delete the underscore inside ()
        //in the past: set ['key'](_) {return 1}
      };
      assert.equal(obj.key, 1);
    });
  });