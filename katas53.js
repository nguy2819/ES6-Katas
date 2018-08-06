// 53: Map - initialize
// To do: make all tests pass, leave the assert lines unchanged!

describe('initialize a `Map`', function(){

    it('a `new Map()` is empty, has size=0', function() {
      const mapSize = new Map().size; 
      //added .size after new Map()
      //a new Map() is empty => has size = 0
      //in the past: const mapSize = new Map(); 
      assert.equal(mapSize, 0);
    });
  
    it('init Map with `[[]]` has a size=1', function() {
      const mapSize = new Map([[]]).size;
      //added [[]] inside new Map().size => new Map([[]]).size; => has a size = 1
      //in the past: const mapSize = new Map().size;
      assert.equal(mapSize, 1);
    });
  
    it('init a Map with `[[1]]` is the same as `map.set(1, void 0)`', function() {
      let map1 = new Map([[1]]);
      //in the past: let map1 = new Map();
      //map.set is the method adds or updates an element with a specified key and value to a Map object.
      let map2 = new Map().set(1, void 0);
      
      assertMapsEqual(map1, map2);
    });
    
    it('init Map with multiple key+value pairs', function() {
      const pair1 = [1, 'one'];
      const pair2 = [2, 'two'];
      
      const map = new Map([[1, 'one'],[2, 'two']]);
      //added [[1, 'one'],[2, 'two']] inside new Map();
      //OR const map = new Map([pair1, pair2)];
      // or added [pair1, pair2] inside const map = new Map ()
      //in the past: const map = new Map();
      
      assertMapsEqual(map, new Map().set(...pair1).set(...pair2));
    });
    
    it('keys are unique, the last one is used', function() {
      const pair1 = [1, 'one'];
      const pair2 = [1, 'uno'];
      const pair3 = [1, 'eins'];
      const pair4 = [2, 'two'];
      
      const map = new Map([pair1, pair2, pair3, pair4]);
      //in the past: const map = new Map([pair3, pair 1, pair 2, pair 4)]
      //rearranged the pair 1, pair 2 inside new Map()
      
      assertMapsEqual(map, new Map().set(...pair3).set(...pair4));
    });
    
    it('init Map from an Object, is a bit of work', function() {
      let map = new Map();
      const obj = {x: 1, y: 2};
      const keys = Object.keys(obj);
      keys.forEach(key => map.set(key, obj[key]));
      //added key, obj[key] inside map.set()
      //in the past:  keys.forEach(key => map.set());
  
      const expectedEntries = [['x', 1], ['y', 2]];
      assertMapsEqual(map, expectedEntries);
    });
  });
  
  function mapToArray(map) {
    return Array.from(map);
  }
  function assertMapsEqual(map1, map2) {
    assert.deepEqual(mapToArray(map1), mapToArray(map2));
  }
  