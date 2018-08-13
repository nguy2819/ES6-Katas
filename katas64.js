// 64: Set - delete
// To do: make all tests pass, leave the assert lines unchanged!

describe('`set.delete()` deletes an element from a set', function(){

    let set;
    beforeEach(() => set = new Set());
  
    describe('use `delete(<value>)` to delete an element', function() {
      beforeEach(function() {
        set.add('one').add('two').add('three');
      });
      it('`delete()` returns `true` when the element was found', function() {
        const returns = set.delete('one');
        //changed .remove to .delete('one')
        //in the past: const returns = set.remove;
        assert.strictEqual(returns, true);
      });
      it('and the size decreases', function() {
        set.delete('one'); //added this line to make it decreases - because set.add('one').add('two').add('three');=> which means set.size=3
        assert.equal(set.size, 2);
      });
    });
    
    describe('if nothing was deleted (no element with the given value was found)', function() {
      it('returns `false`', function() {
        set.add('one');
        const returns = set.delete('two');
        //changed 'one' to 'two'
        //because there is no 'two' in set.add('one') to delete => returns false
        //in the past: const returns = set.delete('one');
        
        assert.equal(returns, false);
      });
    });
    
    describe('`undefined` is a valid value in a set', function() {
      it('deleting it, when it is not in the set, returns `false` too', function() {
        const whatToDelete = ('') //added this line to define whatToDelete
        assert.equal(set.delete(whatToDelete), false);
      });
      
      it('`delete()` removes it, when its in the set', function() {
        set.add() //added this line so that we can set.delete() into true
        assert.equal(set.delete(), true);
      });
    });
    
    
    describe('the value does NOT get casted', function() {
      it('number 1 is different to string "1"', function() {
        set.add(1);
        set.add(1);
        //delete '' around 1 so that when they want to delete '1', there is no '1' to delete => false
        //in the past: set.add('1')
        assert.equal(set.delete('1'), false);
      });
    });
  });
  