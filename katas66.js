// 66: object-literal - getter
// To do: make all tests pass, leave the assert lines unchanged!

describe('An object literal can also contain getters', () => {

    it('just prefix the property with `get` (and make it a function)', function() {
      const obj = {
        get x() { return 'ax'; }
        //put get in front of x() to prefix the property and make it a function
        //in the past: x() { return 'ax'; }
      };
      
      assert.equal(obj.x, 'ax');
    });
  
    it('must have NO parameters', function() {
      const obj = {
        get x() { return 'ax'; }
        //put get in front of x(param) and delete param inside x()
        //in the past: x(param) { return 'ax'; }
      };
      
      assert.equal(obj.x, 'ax');
    });
  
  
    it('can be a computed property (an expression enclosed in `[]`)', function() {
      const keyName = 'x';
      const obj = {
        get [keyName]() { return 'ax'; }
        //put the square racket around keyName
        //in the past: get keyName() { return 'ax'; }
      };
      
      assert.equal(obj.x, 'ax');
    });
  
    it('can be removed using delete', function() {
      const obj = {
        get x() { return 'ax'; }
      };
      delete obj.x //added this line to delete obj.x => so it'll unable to return 'ax' and will return void 0 
      assert.equal(obj.x, void 0);
    });
  
    // The following dont seem to work in the current transpiler version
    // but should be correct, as stated here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
    // It might be corrected later, new knowledge welcome.
    
    //it('must not overlap with a pure property', function() {
    //  const obj = {
    //    x: 1,
    //    get x() { return 'ax'; }
    //  };
    //  
    //  assert.equal(obj.x, 'ax');
    //});
    //
    //it('multiple `get` for the same property are not allowed', function() {
    //  const obj = {
    //    x: 1,
    //    get x() { return 'ax'; },
    //    get x() { return 'ax1'; }
    //  };
    //  
    //  assert.equal(obj.x, 'ax');
    //});
  });
  