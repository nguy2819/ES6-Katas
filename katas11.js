// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring also works on strings', () => {

  
    it('destructure every character', () => {
      let [a, b, c] = 'abc'; //added [ ] around a, b, c
      assert.deepEqual([a, b, c], ['a', 'b', 'c']);
    });
    
    it('missing characters are undefined', () => {
      const [a, c] = 'a'; //delete the word b in 'a,b' so c is undefined (in the past: const [a, c] = 'ab')
      assert.equal(c, void 0);
    });
    
    it('unicode character work too', () => {
      const [a, space, coffee] = 'a ☕'; //added a and comma so that [a, space, coffee] = 'a 'space' ☕'
      assert.equal(coffee, '\u{2615}');
    });
    
  });
  