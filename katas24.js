// 24: class - static keyword
// To do: make all tests pass, leave the assert lines unchanged!

describe('inside a class you can use the `static` keyword', () => {

    describe('for methods', () => {
      
      class IntegrationTest {}
      class UnitTest {}
      
      it('a static method just has the prefix `static`', () => {
        class TestFactory {
          static makeTest() { return new UnitTest(); } 
          //added the prefix word "static" in front of "makeTest()"-which is signature"
        }
        
        assert.ok(TestFactory.makeTest() instanceof UnitTest);
      });
    
    
    //Don't use dynamic in real world, they will hunt you down.
      it('the method name can be dynamic/computed at runtime', () => {
        const methodName = 'makeTest';
        class TestFactory {
          static [methodName]() { return new UnitTest(); }
        }
        
        assert.ok(TestFactory[methodName]() instanceof UnitTest);
        // or the other way: assert.ok(TestFactory.makeTest() instaceof UnitTest); This is className.variable Value
        //but the other way contains makeTest will fail if someone changes the methodName to 'makeTest2' so that we should use the variable name. This is className[variable Name]
        //className.variable Value (has a dot in between) or className[variable Name] (no dot in between)
      });
    });
    
    describe('for accessors', () => {
      it('a getter name can be static, just prefix it with `static`', () => {
        class UnitTest {
          static get testType() { return 'unit'; }
          //We can have multiple prefix words and static always first. 
        }
        
        assert.equal(UnitTest.testType, 'unit');
      });
      
      it('even a static getter name can be dynamic/computed at runtime', () => {
        const type = 'test' + 'Type';
        class IntegrationTest {
          static get [type]() { return 'integration'; }
          //since the assert.equal used the className (IntegrationTest) so that we need to use static
          //like the 2nd test, the assert.ok used the className (TestFactory) so that we need to use static
          //to make it dynamic, we put the className into [] => [type]()
        }
        
        assert.ok('testType' in IntegrationTest);
        assert.equal(IntegrationTest.testType, 'integration');
      });
    });
    
  });
  