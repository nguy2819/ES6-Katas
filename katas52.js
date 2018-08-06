// 52: Generator - Send value to a generator
// To do: make all tests pass, leave the assert lines unchanged!

describe('pass a value to a generator', () => {

    it('basics: get the values from a generator in two ways', function() {
      function* generatorFunction() {
        yield 1;
        yield 2;
      }
      // way #1
      var convertedToAnArray = Array.from(generatorFunction());
      // way #2
      var iterator = generatorFunction();
      var iteratedOver = [iterator.next().value, iterator.next().value];
      //added iterator.next().value 2 times
      //in the past: var iteratedOver = [iterator.next().___, iterator.___];
  
      assert.deepEqual(convertedToAnArray, iteratedOver);
    });
  
    it('pass a value to the iterator', function() {
      function* generatorFunction() {
        yield 1;
        yield 2; //in the past: yield param and param is undefined so we changed param to 2
        //in the past: yield param;
      }
      var iterator = generatorFunction();
      var iteratedOver = [iterator.next().value, iterator.next(2).value];
      assert.deepEqual([1, 2], iteratedOver);
      //or the second way, add param in the "function* generatorFunction() {" so that it will be "function* generatorFunction(param) {"
      //yield 1; yield param;}
      //var iterator = generatorFunction(param); <= added param inside generatorFunction();
    });
  
    it('a value passed to the 1st `next()` call is ignored', function() {
      function* generatorFunction() {
        yield 1;
        yield 2; //added yield 2 so that they can get [1, 2] 
      }
      let iterator = generatorFunction();
      const values = [
        iterator.next('irrelevant').value, 
        iterator.next(2).value
      ];
      assert.deepEqual(values, [1, 2]);
    });
  
  });
  