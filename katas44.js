// 44: Map - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Map` is a key/value map', function(){

    it('`Map` is a new global constructor function', function() {
      assert.equal(typeof Map, 'function');
    });
    
    it('provides `new Map().set()` to add key+value pair, `get()` to read it by key', function() {
      let map = new Map();
      map.set('key', 'value', null); //added 'value' after 'key' so when map.get('key'), it will get 'value'
      //in the past: map.set('key', null)
      const value = map.get('key');
      //added 'key' in map.get so that when they map, they will skip the 'key' and get the next index
      //in the past: const value = map.get();
      
      assert.equal(value, 'value');
    });
    
    it('`has()` tells if map has the given key', function() {
      let map = new Map();
      map.set('key', 'value');
      const hasIt = map.has('key');
      //changed hazz to map.has('key')
      //in the past: const hasIt = map.hazz
      //The has() method returns a boolean indicating whether an element with the specified key exists or not.
  
      
      assert.equal(hasIt, true);
    });
  
    it('a map is iterable', function() {
      let map = new Map();
      map.set('1', 'one');
      map.set('2', 'two');
      const mapAsArray = Array.from(map); // hint: kata #29 http://tddbin.com/#?kata=es6/language/array-api/from
      //in the past: const mapAsArray = map;
      //added Array.from to create an array from our map
      assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
    });
    
  
    it('complex types can be keys', function() {
      const obj = {x: 1};
      const otherObj = {x: 1};
      let map = new Map();
      map.set(obj, '');
      map.set(); //deleted all the otherObj, '' inside the () so that there is no otherObj 
      //in the past: map.set(otherObj, '')
      
      assert.equal(map.has(otherObj), false);
    });
    
  });
  