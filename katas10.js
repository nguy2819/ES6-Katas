// 10: destructuring - array
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring arrays makes shorter code', () => {

    it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
      let [firstValue] = [1]; //array needs to equal array, added [ ] around firstValue
      assert.strictEqual(firstValue, 1);
    });
  
    it('swap two variables, in one operation', () => {
      let [x, y] = ['ax', 'why'];
      [x, y] = [y, x]; //switch the position of x and y to make x=y and y=x (in the past: [x, y]=[x, y])
      assert.deepEqual([x, y], ['why', 'ax']);
    });
    
    it('leading commas', () => {
      const all = ['ax', 'why', 'zet'];
      const [,,z] = all; //added another comma to make z = zet
      assert.equal(z, 'zet');
    });
    
    it('extract from nested arrays', () => {
      const user = [['Some', 'One'], 23];
      const [[firstName, surname], age] = user; 
      //made the 2 lines match each other. So [['Some', 'One'], 23] = [[firstName, surname], age] = user
      
      const expected = 'Some One = 23 years';
      assert.equal(`${firstName} ${surname} = ${age} years`, expected);
    });
  
    it('chained assignments', () => {
      let c, d;
      let [a, b] = [c, d] = [1, 2]; //added [ ] around a, b so array a, b = array c, d = array 1, 2
      assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
    });
  
    it('in for-of loop', () => {
      for (var [a, b] of [[1, 2]]) {} //delete number 0 so that [a, b] = [1, 2]
      assert.deepEqual([a, b], [1, 2]);
    });
  
  });
  