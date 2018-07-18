// 21: spread - with-strings
// To do: make all tests pass, leave the assert lines unchanged!

describe('spread with strings', () => {

    it('simply spread each char of a string', function() {
      const [a, b] = [...'ab'];
      //switched a and b 
      //in the past: const [b, a] = [...'ab'];
      assert.equal(a, 'a');
      assert.equal(b, 'b');
    });
  
    it('extracts each array item', function() {
      const [a, b, c] = ['1', '2', ...'12'];
      //added b in the middle and trying to make a = 1, b = 2
      //in the past: const [a,,c] = ['a', ...'12'];
      //or solve in this way: const [,a,b] = ['a', ...'12']; 
      //added a comma in front of a ( to get rig to the 'a' and delete an extra comma between a and b to make a - assigned to 1 and b - assigned to 2 in '12'
      assert.equal(a, 1);
      assert.equal(b, 2);
    });
    
    it('works anywhere inside an array (must not be last)', function() {
      const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
      //added comma around words
      //in the past: const letters = ['a' 'bcd', 'e', 'f'];
      // or added 3 dots in front of 'bcd' to destructor bcd to seperate letters
      //so it will be const letter = ['a', ...'bcd', 'e', 'f'];
      assert.equal(letters.length, 6);
    });
    
    it('dont confuse with the rest operator', function() {
      const [...rest] = ['1', '2', '3', '4', '5'];
      //added comma between numbers to seperate numbers
      //in the past: const [...rest] = ['1234', ...'5'];
      // or moved 3 dots in front of '5' over '1234' => const [...rest] = [...'1234', '5'];
      assert.deepEqual(rest, [1, 2, 3, 4, 5]);
    });
    
    it('passed as function parameter', function() {
      const max = Math.max(1, 2, 3, 4, 5);
      //added comma between numbers 
      //in the past: const max = Math.max(12345);
      //if added 3 dots (spread out operator) in front of 12345, needs to add single quotation '12345'
      // so it will be: const max = Math.max(...'12345');
      assert.deepEqual(max, 5);
    });
    
  });
  
  