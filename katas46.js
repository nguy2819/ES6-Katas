// 46: Map.prototype.set()
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Map.prototype.set` adds a new element with key and value to a Map', function(){

    it('simplest use case is `set(key, value)` and `get(key)`', function() {
      let map = new Map();
      map.set('key', 'value');
      //added 'key' and 'value' inside map.set
      //in the past: map.set();
      //In MDN, syntax: myMap.set(key, value);
      
      assert.equal(map.get('key'), 'value');
    });
  
    it('the key can be a complex type too', function() {
      const noop = function() {};
      let map = new Map();
      map.set(noop, 'the real noop');
      //in the past: map.set(function() {}, 'the real noop');
      //changed function() {} to noop
      
      assert.equal(map.get(noop), 'the real noop');
    });
  
    it('calling `set()` again with the same key replaces the value', function() {
      let map = new Map();
      map.set('key', 'value');
      map.set('key', 'value1'); //changed 'value3' to 'value1'
      
      assert.equal(map.get('key'), 'value1');
    });
  
    it('`set()` returns the map object, it`s chainable', function() {
      let map = new Map();
      map.set(1, 'one')
         .set(2, 'two')
         .set(3, 'three'); //added this line .set(3, 'three') and move ; from .set(2) to .set(3)
      
      assert.deepEqual([...map.keys()], [1,2,3]);
      assert.deepEqual([...map.values()], ['one', 'two', 'three']);
    });
  
  });
  