// 68: Reflect - construct 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.construct` is the `new` operator as a function', function() {

    describe('the function itself', function() {
      it('is static on the `Reflect` object', function() {
        const name = `constructor`;
        //changed 'konstructor' to 'constructor' - spelling issue - needs to take the Composition course again
        //const name = `konstructor`;
        assert.equal(name in Reflect, true);
      });
      it('is of type `function`', function() {
        const expectedType = 'function';
        //changed '???' to 'function'
        assert.equal(typeof Reflect.construct, expectedType)
      });
    });
    
    describe('the 1st parameter is the constructor to be invoked', function() {
      it('fails when given a number as constructor', function() {
        let aNumber = 1;
        //changed () => {} to 1 (just give it a number)
        //in the past: let aNumber = () => {}
        assert.throws(() => { Reflect.construct(aNumber, []) }, TypeError);
      });
      
      it('works giving a function', function() {
        let aFunction = () => {};
        //added = () => {} after let aFunction => giving a function
        //OR let aFunction = () => {return 'happymeal'};
        //in the past: let aFunction;
        assert.doesNotThrow(() => { Reflect.construct(aFunction, []) });
      });
      
      it('works giving a class', function() {
        const aClass = class {}
        //added "class" in front of {} to give it a class 
        //in the past: const aClass = {}
        assert.doesNotThrow(() => { Reflect.construct(aClass, []) });
      });
    });
  
    describe('the 2nd parameter is a list of arguments, that will be passed to the constructor', function() {
      
      const aClass = class {};
      it('fails when it`s not an array(-like), e.g. a number', function() {
        let aNumber = 1;
        //changed [] to a random number to make it not an array 
        //in the past: let aNumber = [];
        assert.throws(() => { Reflect.construct(aClass, aNumber) }, TypeError);
      });
      it('works with an array-like object (the `length` property look up should not throw)', function() {
        let arrayLike = [{get length() { throw new Error(); }}];
        //added an array around {get length() { throw new Error(); }}
        //OR deleted the whole "throw new Error();" => let arrayLike = [{get length() { }}];
        //in the past: let arrayLike = {get length() { throw new Error(); }};
        assert.doesNotThrow(() => { Reflect.construct(aClass, arrayLike) });
      });
      it('works with a real array', function() {
        let realArray = [];
        //changed '' to [] (string to array)
        //in the past: let realArray = ''
        assert.doesNotThrow(() => { Reflect.construct(aClass, realArray) });
      });
    });
  
    describe('in use', function() {
      
      it('giving it a class it returns an instance of this class', function() {
        class Constructable {}
        let instance = Reflect.construct(Constructable, []); // use Reflect.construct here!!!
        //added Reflect.construct(Constructable, []);
        assert.equal(instance instanceof Constructable, true);
      });
      
      describe('the list of arguments are passed to the constructor as given', function() {
        class Constructable {
          constructor(...args) { this.args = args; }
        }
        it('if none given, nothing is passed', function() {
          let instance = Reflect.construct(Constructable, []);
          //deleted the number 1 inside the []
          //in the past: let instance = Reflect.construct(Constructable, [1]);
          
          assert.deepEqual(instance.args, []);
        });
        it('passing an array, all args of any type are passed', function() {
          const argumentsList = ['arg1', ['arg2.1', 'arg2.2'], {arg: 3}];
          let instance = Reflect.construct(Constructable, argumentsList);
          //added (Constructable, argumentsList) for Reflect.construct
          //in the past: let instance = Reflect.construct
          
          assert.deepEqual(instance.args, argumentsList);
        });
      });
    });
  
    describe('the length property', function() {
      it('of `Reflect.construct` is 2', function() {
        let expected = 2;
        //added "= 2" for the let expected
        assert.equal(Reflect.construct.length, expected);
      });
    });
    
  });
  