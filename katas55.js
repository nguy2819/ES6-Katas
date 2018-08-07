// 55: Number - isInteger
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Number.isInteger()` determines if a value is an integer', function(){

    const isTrue = (what) => assert.equal(what, true);
    const isFalse = (what) => assert.equal(what, false);
  
    it('`isInteger` is a static function on `Number`', function() {
      const whatType = 'function';
      //changed method to function because isInteger is a static function
      //in the past: const whatType = 'method';
      assert.equal(typeof Number.isInteger, whatType);
    });
  
    describe('zero in different ways', function() {
      it('0 is an integer', function() {
        const zero = 0;
        //changed null to 0
        //in the past: const zero = null;
        isTrue(Number.isInteger(zero));
      });
      it('0.000', function() {
        isTrue(Number.isInteger(0.000));
      });
      it('the string "0" is NOT an integer', function() {
        const stringZero = "0";
        //changed 0 to "0"
        //in the past: const stringZero = 0;
        isFalse(Number.isInteger(stringZero));
      });
    });
  
    describe('one in different ways', function() {
      it('0.111 + 0.889', function() {
        const rest = 0.889;
        //missed number 9 in 0.889
        //in the past: const rest = 0.88;
        isTrue(Number.isInteger(0.111 + rest));
      });
      it('0.5 + 0.2 + 0.2 + 0.1 = 1 ... isn`t it?', function() {
        const oneOrNot = 0.5 + 0.2 + 0.4; //changed 0.3 to 0.4 so it cannot be 1 to make it False
        //in the past: const oneOrNot = 0.5 + 0.2 + 0.3;
        isFalse(Number.isInteger(oneOrNot));
      });
      it('parseInt`ed "1" is an integer', function() {
        const convertedToInt = Number.parseInt('1.01');
        //added Int behind parse => so they can transfer '1.01' to number 1.01
        //in the past: const convertedToInt = Number.parse('1.01');
        isTrue(Number.isInteger(convertedToInt));
      });
    });
    
    describe('what is not an integer', function() {
      it('`Number()` is an integer', function() {
        const numberOne = Number();
        //added () after Number to make it an integer
        //in the past: const numberOne = Number;
        isTrue(Number.isInteger(numberOne));
      });
      it('`{}` is NOT an integer', function() {
        const isit = Number.isInteger({});
        //changed isWhat to isInteger
        //in the past: const isit = Number.isWhat({})
        isFalse(isit);
      });
      it('`0.1` is not an integer', function() {
        const isit = Number.isInteger(0.1);
        //added isInteger after Number
        //in the past: const isit = Number(0.1);
        isFalse(isit);
      });
      it('`Number.Infinity` is not an integer', function() {
        const isit = Number.isInteger(Number.Infinity);
        //changed Number.MAX_VALUE to Number.Infinity
        isFalse(isit);
      });
      it('`NaN` is not an integer', function() {
        const isit = Number.isInteger(NaN);
        //changed Number.isFloat to Number.isInteger
        isFalse(isit);
      });
    });
  
  });
  