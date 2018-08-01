// 43: array - `Array.prototype.values` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {

    it('`values()` returns an iterator', function() {
      const arr = []; //deleted all of the index in the arr
      //in the past: const arr = ['k', 'v', 'e']
      const iterator = arr.values();
      
      assert.deepEqual(iterator.next(), {value: void 0, done: true});
    });
    
    it('use iterator to drop first key', function() {
      const arr = ['keys', 'values', 'entries'];
      const iterator = arr.values();
      iterator.next(); //added next to ___
      //in the past: iterator.___()
  
      assert.deepEqual([...iterator], ['values', 'entries']);
    });
    
    it('empty array contains no values', function() {
      const arr = [...[...[...[...[]]]]];
      //deleted the '1' and finished the [] to make the arr empty
      //in the past: const arr = [...[...[...[...'1']]]];
      const values = [...arr.values()];
      
      assert.equal(values.length, 0);
    });
    
    it('a sparse array without real values has values though', function() {
      const arr = [, ,]; 
      //deleted 0 and replaced it with an extra comma to make extra values
      //in the past: const arr = [, 0]
      //we made extra values (which is undefined) but not value 0
      const keys = [...arr.values()];
      
      assert.deepEqual(keys, [void 0, void 0]);
    });
    
    it('also includes holes in sparse arrays', function() {
      const arr = ['a', , 'c'];
      //we added another commas and 'c' to make the middle index is a value but undefined so void 0
      //in the past: const arr = ['a']
  
      assert.deepEqual([...arr.values()], ['a', void 0, 'c']);
    });
    
  });
  