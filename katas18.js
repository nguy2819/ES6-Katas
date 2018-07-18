// 18: rest - as-parameter
// To do: make all tests pass, leave the assert lines unchanged!

describe('rest in function params', () => {
    
    it('must be the last parameter', () => {
      const fn = (...rest) => { //took out the veryLast word bc rest must be last
        assert.deepEqual([1, 2], rest);
      };
      fn(1, 2);
    });
    
    it('can be used to get all other parameters', () => {
      const fn = (firstParam, secondParam, ...rest) => { //added 3 dots before rest
        assert.deepEqual([3,4], rest);
      };
      fn(null, 2, 3, 4);
    });
    
    it('makes `arguments` obsolete', () => {
      const fn = (...args) => { //added "...args" to define args on the assert.deepEqual
        assert.deepEqual([42, 'twenty three', 'win'], args);
      };
      fn(42, 'twenty three', 'win');
    });
      
    it('eliminate `arguments`!!!', () => {
      const fn = (...rest) => rest; //putting "...rest" into empty () and => "rest"
      //in the past: const fn = () => arguments;
      const [firstArg, ...rest] = fn(1, 2, 3);
      assert.deepEqual([2, 3], rest);
    });
      
  });
  