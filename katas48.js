// 48: Set - add
// To do: make all tests pass, leave the assert lines unchanged!

describe('`add()` appends a new element to the end of a Set object.', function(){

    let set;
    beforeEach(() => set = new Set());
  
    it('adds every value, of any type, only once', function() {
      const fn = () => {};
      
      set.add(1);
      set.add(1); //so even 2 set.add(1) are still considered 1 set.add(1)
      set.add(fn);
      // set.add({fn}); //However, set.add({fn}) is not the same as set.add(fn)
      //or we can change set.add({fn}) to set.add(fn), and with 2 set.add(fn), we can consider them as 1 set.add(fn)
      
      assert.equal(set.size, 2);
    });
    
    it('is chainable', function() {
      set.add(2).add('meal');
      //added (2) and ('meal') so that when they look for 2 through set.has(2), they find it through set.add(2)
      //in the past: set.add.add;
  
      assert.equal(set.has(2), true);
    });
    
    it('call without params adds undefined', function() {
      set.add(void 0);
      //added void 0 inside set.add() so that when they look for void 0 through set.has(void 0), they find it
      //in the past: set.add
      //or added () after set.add
  
      assert.equal(set.has(void 0), true);
    });
    
    it('0, -0 and +0 are equal', function() {
      set.add(+0); //added +0 inside set.add() //in the past: set.add()
      set.add();
      
      //or you can set.add(0); set.add(-0); set.add(+0)
  
      assert.equal(set.has(+0), true);
    });
  });
  