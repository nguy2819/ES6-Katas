// 58: Reflect - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect` basics', function() {
  
    describe('Reflect is special, it is different to e.g. `Object`', function() {
      it('is not a function', function() {
        const expectedType = 'object';
        //changed 'is not a function!' to 'object'
        //in the past: const expectedType = 'is not a function!';
        assert.equal(typeof Reflect, expectedType);
      });
      
      it('it can not be instantiated', function() {
        const tryToConstruct = () => { Reflect(); };
        //put () after Reflect
        //in the past: const tryToConstruct = () => { Reflect; };
        assert.throws(tryToConstruct, TypeError);
      });
      
      it('has no `call` method (as opposed to e.g. Object)', function() {
        const expected = 'undefined';
        //changed 'function' to 'undefined' because we expect there not to be a call method so replace with undefined
        assert.equal(typeof Reflect.call, expected);
      });
      
    });  
    
    describe('some `Reflect` usages', function() {
      
      it('`Reflect.construct()` is like new', function() {
        class Class{};
        //changed let Class to class Class{}
        //in the past: let Class;
        assert.equal(Reflect.construct(Class, []) instanceof Class, true);
      });
      
      it('`Reflect.get()` returns a property`s value', function() {
        let obj = {x: 23};
        //changed 42 to 23
        //in the past: let obj = {x: 42};
        assert.equal(Reflect.get(obj, 'x'), 23);
      });
      
      it('`Reflect.has()` is like `in` just as a function', function() {
        let obj = {x : 42};
        //added x : 42 to make sure that it can compare
        //in the past: let obj = {};
        assert.equal(Reflect.has(obj, 'x'), true);
      });
      
    });
    
  });