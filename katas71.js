// 71: String - `repeat()` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.repeat(x)` appends `x` copies of `str` to each other and returns it', function() {

    describe('pass the count to `str.repeat(count)`', function() {
      it('for `1` the string stays the same', function() {
        const what = 'one'.repeat(1);
        //changed '???' to 'one' and added 1 inside repeat()
        //in the past: const what = '???'.repeat();
        
        assert.equal(what, 'one');
      });
      it('for `3` the string `x` becomes `xxx`', function() {
        const actual = 'x'.repeat(3);
        //changed repeets to repeat(3) => so it can repeat 'x' 3 times to 'xxx'
        assert.equal(actual, 'xxx');
      });
      it('for `0` an empty string is returned', function() {
        const dontRepeat = 0;
        //changed 1 to 0 => so it won't repeat
        //in the past: const dontRepeat = 1;
        assert.equal('shrink'.repeat(dontRepeat), '');
      });
      
      it('the count is not an int, such as "3", it gets coerced to an int', function() {
        const repeated = 'three'.repeat('3');
        //added three inside '' and 3 inside repeat('')
        //in the past: const repeated = ''.repeat('1');
        assert.equal(repeated, 'threethreethree');
      });
    });
  
    describe('throws an error for', function() {
      it('a count of <0', function() {
        const belowZero = -1;
        //changed 1 to -1
        //in the past: const belowZero = 1;
        assert.throws(() => { ''.repeat(belowZero); }, RangeError);
      });
      it('a count of +Infinty', function() {
        let infinity = '+Infinity';
        //changed 'infinity' to '+Infinity'
        assert.throws(() => { ''.repeat(infinity); }, RangeError);
      });
    });
    
    describe('accepts everything that can be coerced to a string', function() {
      it('e.g. a boolean', function() {
        let aBool = false;
        //changed true to false => so it can repeat 2 times => falsefalse
        //in the past: let aBool = true;
        assert.equal(String.prototype.repeat.call(aBool, 2), 'falsefalse');
      });
      it('e.g. a number', function() {
        let aNumber = 1;
        //added = 1 after let aNumber => so when they repeat 2 times => get out 2 number 1 => '11'
        //in the past: let aNumber
        assert.equal(String.prototype.repeat.call(aNumber, 2), '11');
      });
    });
  
    describe('for my own (string) class', function() {
      it('calls `toString()` to make it a string', function() {
        class MyString { toString() { return ''; } }
        //deleted 'myString' and make it into ''
        //in the past: class MyString { toString() { return 'myString'; } }
        
        // or class MyString { toString() { return 'myString'; } }
        //and  const expectedString = 'myString';
        const expectedString = '';
        
        assert.equal(String(new MyString()).repeat(1), expectedString);
      });
      it('`toString()` is only called once', function() {
        let counter = 1;
        class X {
          toString() {
            return counter++;
          }
        }
        
        let repeated = String(new X()).repeat(2);
        //we drapped new X() inside String() - we don't know how to solve this last problem of katas
        assert.equal(repeated, '11');
      });
    });
    
  });
  