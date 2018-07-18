// 20: spread - with-arrays
// To do: make all tests pass, leave the assert lines unchanged!

describe('spread with arrays', () => {

    it('extracts each array item', function() {
      const [a, b, ...rest] = [...[1, 2]]; //changed position between a and b and added "...rest"
      //in the past: const [b, a]
      assert.equal(a, 1);
      assert.equal(b, 2);
    });
  
    it('in combination with rest', function() {
      const [, a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]]; //added a comma in front of a to make another character for 0
      //in the past: const[a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]];
      assert.equal(a, 1);
      assert.equal(b, 2);
      assert.deepEqual(rest, [3, 4, 5]);
    });
  
    it('spreading into the rest', function() {
      const [...rest] = [...[1, 2, 3, 4, 5]]; //delete the comma in front of 1
      //in the past: const [...rest] = [...[,1, 2, 3, 4, 5]];
      assert.deepEqual(rest, [1, 2, 3, 4, 5]);
    });
  
    describe('used as function parameter', () => {
      it('prefix with `...` to spread as function params', function() {
        const magicNumbers = [1, 2];
        const fn = ([magicA, magicB]) => {
          //added [] around (magic, magicB) so magicA can be assigned to 1 and magicB can be assigned to 2
          //in the past: const fn = (magicA, magicB) =>
          assert.deepEqual(magicNumbers[0], magicA);
          assert.deepEqual(magicNumbers[1], magicB);
        };
        fn(magicNumbers);
      });
    
      it('pass an array of numbers to Math.max()', function() {
        const max = Math.max(...[23, 0, 42, 40]); //changed 43 to 40 to make 42 be the biggest number
        //in the past const max = Math.max(...[23, 0, 42, 43]);
        assert.equal(max, 42);
      });
    });  
  });
  