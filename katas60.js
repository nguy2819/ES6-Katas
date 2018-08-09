// 60: Reflect - getPrototypeOf 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.getPrototypeOf` returns the prototype', function() {

    it('works like `Object.getPrototypeOf`', function() {
      const viaObject = Object.getPrototypeOf({});
      const viaReflect = Reflect.getPrototypeOf({});
      //added {} inside getPrototypeOf() to make it called an object
      //in the past: const viaReflect = Reflect.getPrototypeOf();
      
      assert.strictEqual(viaObject, viaReflect);
    });
  
    it('throws a TypeError for a non-object', function() {
      let fn = () => { Reflect.getPrototypeOf('non-object') };
      //took the {} out of Reflect.getPrototypeOf()
      //or we can put a string inside it, like 'non-object'
      //in the past: let fn = () => { Reflect.getPrototypeOf({}}) };
      assert.throws(fn, TypeError);
    });
  
    it('a `new Set()` has a prototype', function() {
      const aSet = new Set();
      //added new in front of Set and () after the Set;
      //in the past: const aSet = Set;
      
      assert.equal(Reflect.getPrototypeOf(aSet), Set.prototype);
    });
  
    it('for a class, it is `Klass.prototype`', function() {
      class Klass {}
      const proto = Klass.prototype;
      //deleted the "new" word and added .prototype after Klass
      //in the past: const proto = new Klass();
      
      assert.equal(proto, Klass.prototype);
    });
  
    it('for a old-style class, works too', function() {
      function Klass() {}
      const proto = Reflect.getPrototypeOf(new Klass);
      //added new Klass inside Reflect.getPrototypeOf() to instantiated a new Klass with the new keyword
      //in the past: const proto = Reflect.getPrototypeOf();
          
      assert.equal(proto, Klass.prototype);
    });
  
    it('an array has a prototype too', function() {
      let arr = [];
      const expectedProto = Array.prototype;
      //added .prototype after Array
      //in the past: const expectedProto = Array;
      
      assert.equal(Reflect.getPrototypeOf(arr), expectedProto);
    });
  
    // TODO
    // it('getting the prototype of an "exotic namespace object" returns `null`', function() {
    //   http://www.ecma-international.org/ecma-262/6.0/#sec-module-namespace-exotic-objects-getprototypeof
    //   Don't know how to write a test for this yet, without creating a dep in tddbin hardcoded
    //   PRs welcome
    //   assert.equal(Reflect.getPrototypeOf(namespace exotic object), null);
    // });
  });