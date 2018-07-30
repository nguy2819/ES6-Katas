// 35: Symbol.for - retrieves or creates a runtime-wide symbol
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Symbol.for` for registering Symbols globally', function() {
  
    it('creates a new symbol (check via `typeof`)', function() {
      const symbolType = typeof Symbol.for('symbol name'); //added typeof 
      //in the past: const symbolType = Symbol.for('symbol name');
      //to define what the type of Symbol.for('symbol name') is. It's symbol.
  
      assert.equal(symbolType, 'symbol');
    });
    
    it('stores the symbol in a runtime-wide registry and retrieves it from it', function() {
      const sym = Symbol.for('new symbol');
      const sym1 = Symbol.for('new symbol');//deleted the number 1 in new symbol
      //in the past: const sym1 = Symbol.for('new symbol1');
      //the Symbol.for to make sym = sym1. 
      //the Symbol cannot make sym = sym1, it will make sym unequal to sym1
      
      //In MDN, Same global symbol, but not locally
      //Symbol.for('bar') === Symbol.for('bar'); // true
      //Symbol('bar') === Symbol('bar'); // false
      
      assert.equal(sym, sym1);
    });
    
    it('is different to `Symbol()` which creates a symbol every time and does not store it', function() {
      var globalSymbol = Symbol.for('new symbol');
      var localSymbol = Symbol('new symbol');
      //changed globalSymbol to localSymbol in the second var
      //bc Symbol.for('new symbol'); // create a new global symbol, but not locally
      
      assert.notEqual(globalSymbol, localSymbol);
    });
    
    describe('`.toString()` on a Symbol', function() {
      
      const localSymbol = Symbol('new symbol');
      const symbolFromRegistry = Symbol.for('new symbol');
      
      it('also contains the key given to `Symbol.for()`', function() {
        const description = localSymbol.toString(); //added () after toString to make it turns into function and localSymbol into string
        //in the past: const description = localSymbol.toString;
        assert.equal(description, 'Symbol(new symbol)');
      });
    
      describe('NOTE: the description of two different symbols', function() {
        it('might be the same', function() {
          const localDescription = localSymbol.toString();
          const fromRegistryDescription = symbolFromRegistry.toString();
          //in the past: const fromRegistryDescription = ''+symbolFromRegistry;
          //we deleted ''+ and replaced with .toString() 
  
          
          assert.equal(localDescription, fromRegistryDescription);
        });
        
        it('but the symbols are not the same!', function() {
          assert.notEqual(localSymbol, symbolFromRegistry);
        });
      });    
    });
    
  });
  