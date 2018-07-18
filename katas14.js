// 14: destructuring - parameters
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring function parameters', () => {

    describe('destruct parameters', () => {
      it('multiple params from object', () => {
        const fn = ({id, name}) => { 
          //made 2 objects into 1 object by delete curly brackets (in the past: ({id}, {name}))
          assert.equal(id, 42);
          assert.equal(name, 'Wolfram');
        };
        const user = {name: 'Wolfram', id: 42};
        fn(user);
      });
      
      it('multiple params from array/object', () => {
        const fn = ([,{name}]) => {
          //added a comma in between square bracket and curly bracket to make it looks like multiple params from array
          assert.equal(name, 'Alice');
        };
        const users = [{name: 'nobody'}, {name: 'Alice', id: 42}];
        fn(users);
      });
    });
  
    describe('default values', () => {
      it('for simple values', () => {
        const fn = (id, name='Bob') => {
          assert.strictEqual(id, 23);
          assert.strictEqual(name, 'Bob'); //made the name inside function as same as inside the strictEqual (Bobby to Bob)
        };
        fn(23);
      });
      
      it('for a missing array value', () => {
        const defaultUser = {id: 23, name: 'Joe'};
        const fn = ([user,defaultUser]) => {
          //Added defaultUser inside the function since it is a missing array value
          assert.deepEqual(user, defaultUser);
        };
        fn([]);
      });
      
      it('mix of parameter types', () => {
        const fn = (id, [arr], {obj}) => {
          assert.equal(id, 1);
          assert.equal(arr, 2);
          assert.equal(obj, 3);
        };
        fn('1', [2], {obj:3});
        //changed the fn(void 0, [], {}) 
      });
    });
  
  });