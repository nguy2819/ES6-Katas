// 45: Map.prototype.get()
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Map.prototype.get` returns the element from the map for a key', function(){

    it('`get(key)` returns the value stored for this key', function() {
      let map = new Map();
      map.set('key', 'value');
      
      const value = map.get('key');
      //added 'key' in map.get() to eliminate the 'key' and get the second 'value'
      //in the past: const value = map.get()
      assert.equal(value, 'value');
    });
  
    it('multiple calls still return the same value', function() {
      let map = new Map();
      map.set('value', 'value');
      
      var value = map.get(map.get(map.get('value')));
      //added 'value' inside the map.get() to get the second 'value' and ignore the first 'value'
      //in the past: var value = map.get(map.get(map.get()));
      assert.equal(value, 'value');
    });
  
    it('requires exactly the value as passed to `set()`', function() {
      let map = new Map();
      const obj = {};
      map.set(obj, 'object is key');
      //changed {} to obj because const obj is assgined to {}
      //in the past: map.set({}, 'object is key');
      
      assert.equal(map.get(obj), 'object is key');
    });
  
    it('leave out the key, and you get the value set for the key `undefined` (void 0)', function() {
      let map = new Map();
      map.set(void 0, 'yo');
      
      const value = map.get(void 0);
      //changed ___ to void 0 so we can get the second value 'yo' and elimiate the first value 'void 0'
      //in the past: const value = map.get(___);
      // or we can const value = map.get();
      assert.equal(value, 'yo');
    });
  
    it('returns undefined for an unknown key', function() {
      let map = new Map();
      map.set(void 0, 1);
      
      const value = map.get(-1);
      //added -1 inside map.get() so to get an unknow key => it can get to void 0
      //in the past: const value = map.get();
      //OR you can change: map.set(void 0, void 0)
      assert.equal(value, void 0);
    });
    
  });
  