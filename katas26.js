// 26: class - more-extends
// To do: make all tests pass, leave the assert lines unchanged!

describe('class can inherit from another', () => {

    it('extend an `old style` "class", a function, still works', () => {
      class A {};
      //defined class A by adding class word in front of A and {} after A
      //in the past: let A;
      class B extends A {}
      
      assert.equal(new B() instanceof A, true);
    });
    
    describe('prototypes are as you know them', () => {
      class A {}
      class B extends A {}
      it('A is the prototype of B', () => {
        const isIt = A.isPrototypeOf(B);
        //in the past: const isIt = A.isPrototypeOf(null);
        //changed null to B because they want A is the prototype of B
        assert.equal(isIt, true);
      });
      it('A`s prototype is also B`s prototype', () => {
        const proto = B.prototype;
        //added ".prototype" after B so that A.prototype = B.prototype
        //in the past: const proto = B;
        
        // Remember: don't touch the assert!!! :)
        assert.equal(A.prototype.isPrototypeOf(proto), true);
      });
    });

    describe('`extends` using an expression', () => {
        it('eg the inline assignment of the parent class', () => {
          let A;
          class B extends (A = class {}) {}
          // add the word "class" in front of {} because earlier (A = {}) is reassigned as object not class
          // added the class word helped A turns into class
        
          assert.equal(new B() instanceof A, true);
        });
          
    it('or calling a function that returns the parent class', () => {
      const returnParent = (beNull) => beNull ? null : class {};
      class B extends (returnParent(true)) {}
      //added (true) inside (returnParent) because we want the returnParent is true so that it can return null
      //in the past: class B extends (returnParent){} - which does not mention if it is truthy or falsy
      //that is why we added true inside the returnParent to define the result we want it to be
      
      assert.equal(Object.getPrototypeOf(B.prototype), null);
    });
  });
  
});