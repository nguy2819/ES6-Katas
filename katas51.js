// 51: Generator - Yield Expressions
// To do: make all tests pass, leave the assert lines unchanged!

describe('generator - `yield` is used to pause and resume a generator function', () => {

    function* generatorFunction() {
      yield 'hello';
      yield 'world';
    }
  
    let generator;
  
    beforeEach(function() {
      generator = generatorFunction();
    });
  
    it('converting a generator to an array resumes the generator until all values are received', () => {
      let values = Array.from(generator);
    //put generator inside Array.from()  
    //in the past: let values = Array.from();
      assert.deepEqual(values, ['hello', 'world']);
    });
  
    describe('after the first `generator.next()` call', function() {
      
      it('the value is "hello"', function() {
        const {value} = generator.next();
        //added () after generator.next to make it call the function
        //in the past: const {value} = generator.next;
        assert.equal(value, 'hello');
      });
      
      it('and `done` is false', function() {
        const {done} = generator.next();
        //done (boolean): true or false
        //in the past: const {done} = generator;
  // function* gen() { 
  //   yield 1;
  //   yield 2;
  //   yield 3;
  // }
  
  // var g = gen(); // "Generator { }"
  // g.next();      // "Object { value: 1, done: false }"
  // g.next();      // "Object { value: 2, done: false }"
  // g.next();      // "Object { value: 3, done: false }"
  // g.next();      // "Object { value: undefined, done: true }"
        assert.equal(done, false);
      });
      
    });
  
    describe('after the second `next()` call', function() {
      
      let secondItem;
      beforeEach(function() {
        generator.next(); //added this line to make them get out "Hello"
        secondItem = generator.next(); //this one will get out the value "World"
      });
      
      it('`value` is "world"', function() {
        let {value} = secondItem;
        assert.equal(value, 'world');
      });
      
      it('and `done` is still false', function() {
        const {done} = secondItem; 
        //put done inside {} so const {done} = secondItem = generator.next()
        //in the past: const done = secondItem;
        //The next() method returns an object with two properties done and value.
        assert.equal(done, false);
      });
    });
  
    describe('after stepping past the last element, calling `next()` that often', function() {
      
      it('`done` property equals true, since there is nothing more to iterator over', function() {
        generator.next();
        generator.next();
        let {done} = generator.next();
        //in the past: let done = generator.done;
        //put done in {} and changed generator.done to generator.next()
        //The next() method returns an object with two properties done and value.
        assert.equal(done, true);
      });
      
    });
  
  });
  