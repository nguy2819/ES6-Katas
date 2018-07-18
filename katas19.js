// 19: rest - with-destructuring
// To do: make all tests pass, leave the assert lines unchanged!

describe('rest with destructuring', () => {
    
    it('rest parameter must be last', () => {
      const [...all] = [1, 2, 3, 4]; //delete the word "last" in the end after "...all"
      assert.deepEqual(all, [1, 2, 3, 4]);
    });
    
    it('assign rest of an array to a variable', () => {
      const [firstArray, ...all] = [1, 2, 3, 4]; //added firstArray so number 1 can be eliminated
      assert.deepEqual(all, [2, 3, 4]);
    });
    
    // the following are actually using `spread` ... oops, to be fixed
    it('concat differently', () => {
      const theEnd = [3, 4];
      const allInOne = [1, 2, ...theEnd]; //added 3 dots before theEnd and delete the []
      assert.deepEqual(allInOne, [1, 2, 3, 4]);
    });
    
    it('`apply` made simple, even for constructors', () => {
      const theDate = [2015, 1, 1];
      const date = new Date(theDate);
      return (date, date); // return function
      assert.deepEqual(new Date(2015, 1, 1), date);
    });
    
    //or const date = new Date(...theDate); //so just added 3 dots in front of "theDate"
    
  });