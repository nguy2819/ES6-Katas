// 38: iterator/iterable - string. 
// The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite).
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!

describe('string is a built-in iterable object', function() {
  
    const s = 'abc';
    
    describe('string is iterable', function() {
      it('the string`s object key `Symbol.iterator` is a function', function() {
        const isA = typeof s[Symbol.iterator];
        //changed s to typeof s[Symbol.iterator]
        //in the past: const isA = s;
        //pull out the typeof s which is a fn()
        //var someString = 'hi';
        //typeof someString[Symbol.iterator];          // "function"
        assert.equal(isA, 'function');
      });
      it('use `Array.from()` to make an array out of any iterable', function(){
        const arr = Array.from(s);
        //added Array.from to make the string s to an array
        //in the past: const arr = s;
        assert.deepEqual(arr, ['a', 'b', 'c']);
      });
    });
    
    describe('a string`s iterator', function() {
      let iterator;
      beforeEach(function() {
        iterator = s[Symbol.iterator]();
      });
      
      it('has a special string representation', function(){
        const description = iterator.toString();
        //changed ___ to String
        //in the past: const description = iterator.to___();
        assert.equal(description, '[object String Iterator]');
      });
      
      it('`iterator.next()` returns an object according to the iterator protocol', function(){
        const value = iterator.next();
        //changed ___ to next
        //in the past: const value = iterator.___();
        assert.deepEqual(value, {done: false, value: 'a'});
      });
      
      it('the after-last call to `iterator.next()` says done=true, no more elements', function(){
        iterator.next();
        iterator.next();
        iterator.next();
  //called it 3 times => get to the last element => nothing after that => return done
        assert.equal(iterator.next().done, true);
      });
    });
    
  });
  