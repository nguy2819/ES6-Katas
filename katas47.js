// 47: Set - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Set` lets you store unique values of any type', function(){

    it('`Set` is a new global constructor function', function() {
      assert.equal(typeof Set, 'function');
    });
    
    it('every value in a set is unique', function() {
      let set = new Set();
      
      set.add(1);
      set.add(2); //changed 1 to 2 because every value in a set is unique
      //in the past: set.add(1);
      const expectedSize = 2;
      
      assert.equal(set.size, expectedSize);
    });
    
    it('the string "1" is different to the number 1', function() {
      let set = new Set();
      set.add(1);
      set.add("1"); //added set.add("1")
      // OR we can do: let set = new Set("1") and set.add(1) so they can count set.size = 2
      //they return 2 because there are 2 set.add(1 and "1")
  
      assert.equal(set.size, 2);
    });
    
    it('even NaN is equal to NaN', function() {
      let set = new Set();
      set.add(NaN);
      // set.add(Na); //comment this set.add out so there is only 1 set
      //Or even 2 set.add(NaN) with the same NaN => the set.size is still be considered 1 set.add(NaN)
      //ex: set.add(NaN); set.add(NaN) => still be considered 1 set.add(NaN);
      
      assert.equal(set.size, 1);
    });
    
    it('+0 and -0 are seen as equal', function() {
      let set = new Set();
      set.add(+0); //comment both (+0) and (-0) out because +0 = 0 = -0
      // set.add(0); //or leave +0 and comment out 0 and -0
      // set.add('-0');
      
      assert.deepEqual([...set.values()], [+0]);
    });
    
  });
  