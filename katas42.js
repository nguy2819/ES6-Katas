// 42: array - `Array.prototype.keys`
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.keys` returns an iterator for all keys in the array', () => {

    it('`keys()` returns an iterator', function() {
      const arr = ['a']; //deleted the 'b' in the array
      //in the past: const arr = ['a', 'b']
      //bc 'a' in arr is index 0, 'b' is index 1, if we deleted 'b', there will not have any next index => void 0, so it will done true
      const iterator = arr.keys();
      
      assert.deepEqual(iterator.next(), {value: 0, done: false});
      assert.deepEqual(iterator.next(), {value: void 0, done: true});
    });
    
    it('gets all keys', function() {
      const arr = [,1, 2]; //added a comma in front of 1 to make the arr into 3 indices
      //in the past: const arr = [1, 2]
      const keys = Array.from(arr.keys());
      
      assert.deepEqual(keys, [0, 1, 2]);
    });
    
    it('empty array contains no keys', function() {
      const arr = []; //deleted everything in the arr included''
      //in the past: const arr = ['empty me']
      const keys = [...arr.keys()];
      
      assert.equal(keys.length, 0);
    });
    
    it('a sparse array without real values has keys though', function() {
      const arr = [,,];
      const keys = [...arr.keys()]; //added keys into ___
      //in the past: const keys = [...arr.___()];
      
      assert.deepEqual(keys, [0, 1]);
    });
  
    it('also includes holes in sparse arrays', function() {
      const arr = ['a', , 'c'];
      const keys = [...arr.keys()];
      //added the spread operator "..." and [] around arr.key and () to turns it into function
      //or changed it to const keys = Array.from(arr.keys());
      //in the past: const keys = arr.key;
      
      assert.deepEqual(keys, [0, 1, 2]);
    });
  });
  