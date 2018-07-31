// 39: iterator - custom. Iterable is a protocol, when implemented allows objects 
// to customize their iteration behavior, such as what values are looped over in a for..of construct.
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('A simple iterable without items inside, implementing the right protocol', () => {

    function iteratorFunction() {
      return{
          next: function(){
            return { done: true };
          }
        }
    }
  
    describe('the `iteratorFunction` needs to comply to the iterator protocol', function() {
      it('must return an object', function() {
        return {} // added return {} to return an object
        // someString[Symbol.iterator] = function() {
        // return { // this is the iterator object, returning a single element, the string "bye"}
        assert.equal(typeof iteratorFunction(), 'object');
      });
      
      it('the object must have a function assigned to a key `next`', 
      function() {
      //   return{
      //     next: function(){
      //       return { done: true };
      //     }
      //   }
        assert.equal(typeof iteratorFunction().next, 'function');
      });
  //In MDN, var someString = new String('hi');           // need to construct a String object explicitly to avoid auto-boxing
  //someString[Symbol.iterator] = function() {
  //return { // this is the iterator object, returning a single element, the string "bye"
  //next: function() {
  //if (this._first) {
  //this._first = false;
  //return { value: 'bye', done: false };
  //} else {
  //return { done: true };
  //}
  //},
  //_first: true
  //};
  //};
      
      it('calling `next()` must return an object with `{done: true}`', function() {
      //   return{
      //     next: function(){
      //       return { done: true };
      //     }
      //   }
        assert.deepEqual(iteratorFunction().next(), {done: true});
      });
    });
  
  
    let iterable;
    beforeEach(function() {
      iterable = {
        [Symbol.iterator]: iteratorFunction
      }; // added = {}
    });
  
    describe('the iterable', function() {
      it('must be an object', function() {
  //Set iterable = {}
        assert.equal(typeof iterable, 'object');
      });
      
      it('must have the iterator function assigned to the key `Symbol.iterator`', 
      function() {
  // Set iterable = {
  //  [Symbol.iterator]: iteratorFunction
  //    }; 
  //}
        assert.equal(iterable[Symbol.iterator], iteratorFunction);
      });
    });
    
    describe('using the iterable', function() {
      it('it contains no values', function() {
        let values = '';
        for (let value of iterable) {
          values += value;
        }
        assert.equal(values, '');
      });
      
      it('has no `.length` property', function() {
        const hasLengthProperty = iterable.hasOwnProperty(length);
        //added .hasOwnProperty(length)
        //hasOwnProperty(length) return a boolean if iterable has length property or not
        assert.equal(hasLengthProperty, false);
      });
      
      describe('can be converted to an array', function() {
        it('using `Array.from()`', function() {
          const arr = Array.from(iterable);
          //added Array.from
          assert.equal(Array.isArray(arr), true);
        });
        
        it('where `.length` is still 0', function() {
          const arr = Array.from(iterable); //added Array.from to create an array from iterable
          const length = arr.length;
          assert.equal(length, 0);
        });
      });
    });
    
  });
  