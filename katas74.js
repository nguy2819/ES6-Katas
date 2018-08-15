// 74: String - `endsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`.', function() {

    const s = 'el fin';
  
    describe('1st parameter, the string to search for', function() {
      it('works with just a character', function() {
        const doesEndWith = s.endsWith('n');
        //changed doesItReallyEndWith to endsWith 
        //in the past: const doesEndWith = s.doesItReallyEndWith('n');
        assert.equal(doesEndWith, true);
      });
      it('works with a string', function() {
        const expected = true;
        //changed false to true
        //in the past: const expected = false;
        assert.equal(s.endsWith('fin'), expected);
      });
      it('works with unicode characters', function() {
        const nuclear = 'NO ☢ Oh NO!☢';
        //added ☢ at the end of 'NO ☢ Oh NO!'
        assert.equal(nuclear.endsWith('☢'), true);
      });
      it('a regular expression throws a TypeError', function() {
        const aRegExp = /the/;
        //deleted '' around /the/
        //in the past: const aRegExp = '/the/'';
        assert.throws(() => {''.endsWith(aRegExp)}, TypeError);
      });
    });
  
    describe('2nd parameter, searches within this string as if this string were only this long', function() {
      it('find "el" at a substring of the length 2', function() {
        const endPos = 2;
        //changed 0 to 2 because const s = 'el fin'; so el endPos with 2 after e=0, l=1, and space after el=2
        //in the past: const endPos = 0;
        assert.equal(s.endsWith('el', endPos), true);
      });
      it('`undefined` uses the entire string', function() {
        const _undefined_ = void 0;
        //changed 'I would like to be undefined' to void 0
        //in the past: const _undefined_ = 'I would like to be undefined';
        assert.equal(s.endsWith('fin', _undefined_), true);
      });
      it('the parameter gets coerced to an int', function() {
        const position = '5';
        //changed 'five' to '5' because const s = 'el fin'; => index 5 'n' => you will get 'fi'
        //in the past: const position = 'five';
        assert.equal(s.endsWith('fi', position), true);
      });
      describe('value less than 0', function() {
        it('returns `true`, when searching for an empty string', function() {
          const emptyString = '';
          //deleted '??' to an empty string '' because they want an emptyString, not String with ??
          //in the past: const emptyString = '??';
          assert.equal('1'.endsWith(emptyString, -1), true);
        });
        it('return `false`, when searching for a non-empty string', function() {
          const notEmpty = '??';
          //added ?? inside the empty string to make it not empty
          //in the past: const notEmpty = '';
          assert.equal('1'.endsWith(notEmpty, -1), false);
        });
      });
    });
    
    describe('transfer the functionality to other objects', function() {
      
      const endsWith = (...args) => String.prototype.endsWith.call(...args);
      
      it('e.g. a boolean', function() {
        let aBool = true;
        //changed false to true
        //in the past: let aBool = false;
        assert.equal(endsWith(!aBool, 'lse'), true);
      });
      it('e.g. a number', function() {
        let aNumber = 84;
        //changed 0 to 84 => 84 + 19090 = 1984 => it endsWith 84 => true
        //in the past: let aNumber = 0;
        assert.equal(endsWith(aNumber + 1900, 84), true);
      });
      it('also using the position works', function() {
        const position = '3';
        //changed '??' to '3' because at the 3rd index => 99 
        assert.equal(endsWith(1994, '99', position), true);
      });
    });
    
  });
  