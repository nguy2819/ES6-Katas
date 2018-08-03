// 49: Generator - creation
// To do: make all tests pass, leave the assert lines unchanged!

describe('generator can be created in multiple ways', function() {
  
    it('the most common way is by adding `*` after `function`', function() {
      function* g() {} //added * after function
      //in the past: function g() {} 
      //it will pause the function and come back to it later
      assertIsGenerator(g());
    });
    
    it('as a function expression, by adding a `*` after `function`', function() {
      let g = function*() {}; //added * after function
      //in the past: let g = function() {};
      assertIsGenerator(g());
    });
    
    it('inside an object by prefixing the function name with `*`', function() {
      let obj = {
        *g() {} //added * in front of g() {}
        //in the past: let obj = {g() {}};
      };
      assertIsGenerator(obj.g());
    });
    
    it('computed generator names, are just prefixed with a `*`', function() {
      const generatorName = 'g';
      let obj = {
        *[generatorName]() {} //added * in front of [generatorName]() {}
        //in the past: [generatorName]() {}
      };
      assertIsGenerator(obj.g());
    });
    
    it('inside a class the same way', function() {
      const generatorName = 'g';
      class Klazz {
        *[generatorName]() {} //added * in front of [generatorName]() {}
        //in the past: [generatorName]() {}
      }
      assertIsGenerator(new Klazz().g());
    });
  
    function assertIsGenerator(gen) {
      const toStringed = '' + gen;
      assert.equal(toStringed, '[object Generator]');
    }
    
  });