// 31: array - `Array.prototype.fill` method
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.fill` can fill up an array with one value', () => {

    it('`fill(0)` will populate `0` into each array element', function() {
      const arr = new Array(3).fill(0);
      //added 0 into fill()
      
      assert.deepEqual(arr, [0, 0, 0]);
    });
  
    it('fill only changes content, adds no new elements', function() {
      const arr = [].fill(0);
      //deleted the "undefine" inside the [] because it makes the computer thinks that there is a string inside []
      //in the past: const arr = [undefine].fill(0);
      
      assert.deepEqual(arr, []);
    });
  
    it('second parameter to `fill()` is the position where to start filling', function() {
      const fillPosition = 2; //changed 0 to 2 because the i[0]=1 to i[2]=3
      const arr = [1,2,3].fill(42, fillPosition);
      
      assert.deepEqual(arr, [1, 2, 42]);
    });
  
    it('third parameter is the position where filling stops', function() {
      const fillStartAt = 1;
      const fillEndAt = 2; //changed 1 to 2 => meaning stop filling the third position
      const arr = [1,2,3].fill(42, fillStartAt, fillEndAt);
      
      assert.deepEqual(arr, [1, 42, 3]);
    });
  
  });