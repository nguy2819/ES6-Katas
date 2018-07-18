// 25: class - extends
// To do: make all tests pass, leave the assert lines unchanged!

describe('classes can inherit from another', () => {

    describe('the default super class is Object', () => {
    
      it('class A is an instance of Object', () => {
        class A extends Object{};
        //changed let to class and added extends Objects with {}
        //in the past: let A; 
        
        assert.equal(new A() instanceof Object, true);
      });
    
      it('B extends A, B is also instance of Object', () => {
        class A extends Object {};
        class B extends A {};
        //added "extends Object {}" to class A and added "extends A {}" to class B.
        // because A belongs to Objects, B belongs to A => B belongs/instance to Object
        
        assert.equal(new B() instanceof A, true);
        assert.equal(new B() instanceof Object, true);
      });
      
      it('class can extend `null`, not an instance of Object', () => {
        class NullClass extends null {};
        //changed "extends Object" to "extends null" because they want NullClass is outside of/ not belong to Object
        let nullInstance = new NullClass();
        assert.equal(nullInstance instanceof Object, false);
      });
      
    });
    
    describe('instance of', () => {
      it('when B inherits from A, `new B()` is also an instance of A', () => {
        class A {};
        //changed let to class and added {} because let is a variable (like var) and class defined a blueprint
        class B extends A {}
        
        assert.equal(new B() instanceof A, true);
      });
      
      it('extend over multiple levels', () => {
        class A {}
        class B extends A {} //added this line to define B belongs to A so C can belongs to B => C belongs to A
        class C extends B {}
        
        let instance = new C();
        // added new word in front of C with ()
        // because "new C ()" or "new B ()" defines a real product of the class, while class is just a blueprint (like a construction plan)
        //in the past: let instance = C;
        assert.equal(instance instanceof A, true);
      });
    });
  });
  