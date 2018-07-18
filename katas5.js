// 5: arrow functions - basics 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// To do: make all tests pass, leave the asserts unchanged!

describe('arrow functions', function() {

    it('are shorter to write', function() {
      var func = () => {
        return 'I am func';
      };
      assert.equal(func(), 'I am func');
    });
  
    it('a single expression, without curly braces returns too', function() {
      var func = () => {
        return 'I return too'; //delete the curly braces
        
      };
      assert.equal(func(), 'I return too');
    });
  
    it('one parameter can be written without parens', () => {
      var func = p => p - 1; //make the p same as p (param same as param) - before it was var func = p => param - 1 (which is wrong)
      assert.equal(func(25), 24);
    });
  
    it('many params require parens', () => {
      var func = (param, param1) => param + param1; //add param1 - before it was var func = (param) => param + param1;
      assert.equal(func(23, 42), 23+42);
    });
  
    it('body needs parens to return an object', () => {
      var func = () => {
        return {iAm: 'an object'}; //added {return {iAm: 'an object'}}
      };
      assert.deepEqual(func(), {iAm: 'an object'});
    });
  
  });