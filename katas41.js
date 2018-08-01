// 41: array - entries
// To do: make all tests pass, leave the assert lines unchanged!

describe('`[].entries()` returns an iterator object with all entries', function() {
  
    it('returns key+value for each element', function() {
      const arr = ['a', 'b', 'c'];
      const entriesAsArray = Array.from(arr.entries());
      //changed ___ to entries
      //in the past: const entriesAsArray = Array.from(arr.___());
      
      assert.deepEqual(entriesAsArray, [[0,"a"], [1,"b"], [2,"c"]]);
    });
    
    it('empty elements contain the value `undefined`', function() {
      const arr = ['one']; //or can view as const arr = ['one',,'three'];
      arr[2] = 'three';
      const secondValue = Array.from(arr.entries())[1];
      //added Array.from before and [1] after arr.entries()
      //in the past: const secondValue = arr.entries();
      
      assert.deepEqual(secondValue, [1, void 0]);
    });
  
    describe('returns an iterable', function() {
      
      it('has `next()` to iterate', function() {
        const arr = ['one'];
        const value = arr.entries().next().value;
        //added .entries().next().value
        //in the past: const value = arr;
        //In MDN, var array1 = ['a', 'b', 'c'];
        // var iterator1 = array1.entries();
        //console.log(iterator1.next().value);
  
        assert.deepEqual(value, [0, 'one']);
      });
      
    });
    
  });
  