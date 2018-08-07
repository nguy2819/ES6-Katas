// 56: Generator - Send function to a generator
// To do: make all tests pass, leave the assert lines unchanged!

describe('pass a function to a generator', () => {

    it('the generator can receive a function as a value', function() {
      let fn = function() {};
      function* generatorFunction() {
        yield //added yield to this generator
        assert.equal(yield null, fn); // remember, don't touch this line
      }
      let iterator = generatorFunction();
      iterator.next();
      iterator.next();
    });
  
    it('pass a function to the iterator, which calls it', function() {
      function* generatorFunction() {
        yield ((yield 1, yield 2)());
        //added yield 2
        //in the past: yield (yield 1)()
      }
      var iterator = generatorFunction();
      var iteratedOver = [iterator.next().value, iterator.next().value];
      assert.deepEqual([1, 2], iteratedOver);
    });
  
    it('nesting yielded function calls', function() {
      function* generatorFunction() {
        yield (yield (yield 1)());
      }
      var iteratedOver = [1, 2, 3];
      //in the past: var iteratedOver = []; because [1, 2, 3] is not equal []
      assert.deepEqual([1, 2, 3], iteratedOver);
    });
  
  });
  