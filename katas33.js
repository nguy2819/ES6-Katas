// 33: array - `Array.prototype.findIndex` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.findIndex` makes finding items in arrays easier', () => {

    it('takes a compare function, returns the index where it returned true', function() {
      const foundAt = [false, true].findIndex(item => item === true);
      //in the past: const foundAt = [false, true].findIndex(item)
      //added "=> item === true"
      //so that it can look for true in the array and true is in the position 1 after false is 0
      
      assert.equal(foundAt, 1);
    });
  
    it('returns the first position it was found at', function() {
      const foundAt = [0, 1, 1, 1].findIndex(item => item === 1);
      //in the past: const foundAt = [0, 1, 1, 1].findIndex(item => item = 1);
      //it was missing 2 more equal signs so I added 2 more equal signs
      // item = 1 => item is 1
      // item == 1 => is item equal to 1 or '1'?
      // item === 1 => is item number 1?
      assert.equal(foundAt, 1);
    });
  
    it('returns `-1` when nothing was found', function() {
      const foundAt = [1, 2, 3].findIndex(item => item > 3);
      //changed 1 to 3 because there is no number in the array bigger than 3 => -1 (False)
      //in the past: const foundAt = [1, 2, 3].findIndex(item => item > 1);
      
      assert.equal(foundAt, -1);
    });
  
    it('the findIndex callback gets the item, index and array as arguments', function() {
      const three = 3;
      const containsThree = arr => arr.indexOf(three) > -1;
      function theSecondThree(element, index, arr) {
        //in the past: function theSecondThree(index, arr) {
        //added element inside function the SecondThree() because findIndex always needs 3 parameters (element, index, arr)
        const preceedingItems = arr.slice(0, index);
        return containsThree(preceedingItems);
      }
      const foundAt = [1, 1, 2, 3, 3, 3].findIndex(theSecondThree);
      
      assert.equal(foundAt, 4);
    });
  
    it('combined with destructuring complex compares become short', function() {
      const bob = {name: 'Bob'};
      const alice = {name: 'Alice'};
      const foundAt = [bob, alice].findIndex(({name:{length:l}}) => l > 3);
      //    const foundAt = [bob, alice].findIndex(({name:{length:l}}) => length > 3);
      // const l = name.length
      assert.equal(foundAt, 1);
    });
  
  });
  