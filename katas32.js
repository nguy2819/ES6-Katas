// 32: array - `Array.prototype.find` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Array.prototype.find` makes finding items in arrays easier', () => {

    it('takes a compare function', function() {
      const found = [false, true].find(array => array === true);
      //added (array => array == true) because we want them to understand that we want the true word out of the array
      
      assert.equal(found, true);
    });
  
    it('returns the first value found', function() {
      const found = [0, 1, 2].find(item => item > 1);
      //added number 2 inside array [0, 1] because they want to find number 2 > 1
      
      assert.equal(found, 2);
    });
  
    it('returns `undefined` when nothing was found', function() {
      const found = [1, 2, 3].find(item => item === 0);
      //changed item === 2 to item === 0 because there are no number 0 to find => void 0
      // or const found = [1, '2', 3] => so they cannot find number 2
      
      assert.equal(found, void 0);
    });
  
    it('combined with destructuring complex compares become short', function() {
      const bob = {name: 'Bob'};
      const alice = {name: 'Alice'};
      const found = [bob, alice].find(({name:{length}}) => length == 5);
      //added length == 5
      //in the past: const found = [bob, alice].find(({name:{length}}) => length);
      
      assert.equal(found, alice);
    });
  
  });
  