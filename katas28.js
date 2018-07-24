// 28: class - super in constructor
// To do: make all tests pass, leave the assert lines unchanged!

describe('class', () => {

    it('if you `extend` a class, use `super()` to call the parent constructor', () => {
      class A {constructor() { this.levels = 1; }}
      class B extends A { //added extends A so that class B can belong to class A
        constructor() {
          super(); //also added "super()" so that it can call the parent constructor from class A 
          this.levels++; 
        }
      }
      
      assert.equal(new B().levels, 2);
    });
  
    it('`super()` may also take params', () => {
      class A {constructor(startValue=1, addTo=1) { this.counter = startValue + addTo; }}
      class B extends A {
        constructor(...args) { 
          super(...args);
          //added "...args" into super() - so B can use A's ...args
          //cause without ...args in super(), class B only use class A {constructor {this.counter =...} and forget about (startValue=1, addTo=1) 
          this.counter++; 
        }
      }
      
      assert.equal(new B(42, 2).counter, 45);
    });
    
    it('it is important where you place your `super()` call!', () => {
      class A {inc() { this.countUp = 1; }}
      class B extends A {
        inc() { 
          this.countUp = 2;
          super.inc(); //moved this line from above "this.countUp = 2" to below it so that this.countUp will be rewrited = 1 by class A
          return this.countUp;
        }
      }
      
      assert.equal(new B().inc(), 1);
    });
  
    it('use `super.constructor` to find out if there is a parent constructor', () => {
      class A extends null {
        constructor() {
          super();
          this.isTop = !super.constructor;
          //delete one extra !
          //in the past: this.isTop = !!super.constructor;
        }
      }
  
      assert.equal(new A().isTop, false);
    });
    
  });
  