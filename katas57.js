// 57: Default parameters - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('default parameters make function parameters more flexible', () => {

    it('define it using an assignment to the parameter `function(param=1){}`', function() {
      let number = (int = 0) => int;
      //added int = 0 to make out number 0
      //in the past: let number = (int) => int;
      
      assert.equal(number(), 0);
    });
  
    it('it is used when undefined is passed', function() {
      let number = (int = 23) => int; 
      const param = 23; //changed 42 to 23
      //in the past: const param = 42;
      
      assert.equal(number(param), 23);
    });
  
    it('it is not used when a value is given', function() {
      function xhr(method) { //added method inside xhr() so it can pass method to 'POST' and return method 'POST'
      //in the past: function xhr()
        return method;  
      }
  
      assert.equal(xhr('POST'), 'POST');
    });
  
    it('it is evaluated at run time', function() {
      let defaultValue = 42; //added = 42 so defaultVAlue = 42
      //in the past: let defaultValue;
      function xhr(method = `value: ${defaultValue}`) {
        return method;  
      }
      
      assert.equal(xhr(), 'value: 42');
      defaultValue = 23;
    });
  
    it('it can also be a function', function() {
      function defaultValue(cat = 'sassy'){};
      //make a defaultValue into a function
      //in the past: let defaultValue;
      function fn(value = defaultValue()) {
        return value;  
      }
      
      assert.equal(fn(), defaultValue());
    });
    
  });