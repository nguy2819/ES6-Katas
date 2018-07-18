// 8: block scope - const
// To do: make all tests pass, leave the asserts unchanged!

describe('`const` is like `let` plus read-only', () => {

    describe('scalar values are read-only', () => {
  
      it('number', () => {
        const constNum = 0;
        const Num = 1; //add a space between const and Num (before constNum), make the const Num = 1 be restricted out (read only)
        assert.equal(constNum, 0);
      });
  
      it('string', () => {
        const constString = 'I am a const';
        const String = 'Cant change you?'; //add a space bt const and String - make the line read only
        assert.equal(constString, 'I am a const');
      });
  
    });
    
    const notChangeable = 23;
  
    it('const scope leaks too', () => {
      assert.equal(notChangeable, 23);
    });
    
    describe('complex types are NOT fully read-only', () => {
  
      it('array', () => {
        const arr = [42, 23];
        //arr[0] = 0; //because the first number in the array needs to equal 42, not 0
        assert.equal(arr[0], 42);
      });
      
      it('object', () => {
        const obj = {x: 1};
        obj.x = 3; //changed 2 to 3 (in the past: obj.x = 2 because 2 is not equal to 3)
        assert.equal(obj.x, 3);
      });
      
    });
  
  });