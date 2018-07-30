// 36: Symbol.keyFor - retrieves a shared symbol key from the global symbol registry
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Symbol.keyFor()` gets the symbol key for a given symbol', function() {
  
    const sym = Symbol.for('foo');
    
    it('pass the symbol to `keyFor()` and you get its key', function() {
      const key = Symbol.keyFor(sym); //changed ___ to keyFor
      //in the past: const key = ___.keyFor(sym);
      
    //In MDN, const globalSym = Symbol.for('foo'); // global symbol
  
    //console.log(Symbol.keyFor(globalSym));
    // expected output: "foo"
      
      assert.equal(key, 'foo');
    });
    
    it('local symbols are not in the runtime-wide registry', function() {
      // hint: `Symbol()` creates a local symbol!
      const localSymbol = Symbol('foo'); //deleted the .for so that Symbol() = a local symbol
      //in the past: const localSymbol = Symbol.for('foo');
      const key = Symbol.keyFor(localSymbol);
      
      assert.equal(key, void 0);
    });
    
    it('predefined symbols are not in the runtime-wide registry either', function() {
      const key = Symbol.keyFor(Symbol.iterator);
      // in the past: const key = Symbol.keyFor(Symbol.iteraTor);
      //so we lowercase the T inside symbol.iteraTor => makes it predefined symbol
   
      assert.equal(key, void 0);
    });
    
    it('for non-Symbols throws an error', function() {
      function fn() {
        new Symbol.keyFor(sym); //added new word in front of Symbol.keyFor(sym)
        //This prevents authors from creating an explicit Symbol wrapper object instead of a new symbol value and might be surprising as creating explicit wrapper objects around primitive data types is generally possible (for example, new Boolean, new String and new Number).
        // or changed sym to something to make it non-Symbols
    }
      
      assert.throws(fn);
    });
    
  });
  