// 70: Set - clear
// To do: make all tests pass, leave the assert lines unchanged!

describe('`clear()` removes all elements from a Set object.', function(){

    let set;
    beforeEach(() => set = new Set());
  
    it('`set.size` becomes 0', function() {
      set.add('one').add(2);
      set.clear();
  
      var expectedSize = 0;
      //added = 0 behind var expectedSize;
      //in the past: var expectedSize
      assert.equal(set.size, expectedSize);
    });
  
    it('the iterator `set.entries()` will not contain any items', function() {
      set.add('one').add(2);
      
      set.clear(); //added () after set.clear to make it a finish clear function 
      
      const {done} = set.entries().next();
      assert.equal(done, true);
    });
    
    it('any call to `set.has()` returns false', function() {
      set.add('one').add();
      //deleted 2 inside second .add(2) => so there will no longer has 2 to set.has(2)
      //in the past: set.add('one').add(2); 
      
      assert.deepEqual(set.has(2), false);
    });
    
    it('returns `undefined`', function() {
      var expectedReturn = undefined;
      //added = undefined so after set.clear() nothing, it will turn out to be undefined
      assert.equal(set.clear(), expectedReturn);
    });
    
  });
  