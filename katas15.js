// 15: destructuring - assign
// To do: make all tests pass, leave the assert lines unchanged!

describe('assign object property values to new variables while destructuring', () => {

    describe('for simple objects', function() {
      it('use a colon after the property name, like so `propertyName: newName`', () => {
        const {x: y} = {x: 1}; //changed newName to y so x=y and x=1 so y=1
        assert.equal(y, 1);
      });
      
      it('assign a new name and give it a default value using `= <default value>`', () => {
        const {x: y=42} = {y: 23};
        //Assigned y=42 rather than y=2, like in the past
        assert.equal(y, 42);
      });
    });
  
    describe('for function parameter names', function() {
      it('do it the same way, with a colon behind it', () => {
        const fn = ({x:y}) => {
          //added ":y" so that x=y, y=1, so x=1
          assert.equal(y, 1);
        };
        fn({x: 1});
      });
      
      it('giving it a default value is possible too, like above', () => {
        const fn = ({x: y=3}) => {
          //changed z to y so x=y and y=3
          //in the past: const fn= ({x: z=3})
          assert.equal(y, 3);
        };
        fn({});
      });
    });
    
  });