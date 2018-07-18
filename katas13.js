// 13: destructuring - defaults
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring can also have default values', () => {

    it('for an empty array', () => {
      const [a=1] = [];
      //changed a:1 to a=1
      assert.equal(a, 1);
    });
  
    it('for a missing value', () => {
      const [,b=2,] = [1,,3];
      //added comma before b=2 and after so that b=2 filled in the missing value between [1,,3]
      assert.equal(b, 2);
    });
  
    it('in an object', () => {
      const {a, b=2} = {a: 1};
      // changed [a, b=2] to {a, b=2} so that object = object {}={}
      assert.equal(b, 2);
    });
  
    it('if the value is undefined', () => {
      const {a, b=2} = {a: 1, b: void 0};
      //remove unnecessary [ ] around 2
      //in the past {a, b=[2]}
      //b is undefined so it references to the default value b=2
      assert.strictEqual(b, 2);
    });
  
    it('also a string works with defaults', () => {
      const [a, b=2] = ['1',];
      //added a and comma so a = '1'
      //in the past [b=2] ='1'
      assert.equal(a, '1');
      assert.equal(b, 2);
    });
  
  });