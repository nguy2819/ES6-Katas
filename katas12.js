// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring objects', () => {

    it('is simple', () => {
      const {x} = {x: 1}; //fixed [ ] to {} (in the past: const [x] = {x:1})
      assert.equal(x, 1);
    });
  
    describe('nested', () => {
      it('multiple objects', () => {
        const magic = {first: 23, second: 42};
        const {magic: {second}} = {magic}; //fixed the [ ] to {} (in the past: {magic: [second]})
        assert.equal(second, 42);
      });
      it('object and array', () => {
        const {z:[,x]} = {z: [23, 42]}; //added a comma to lead x=42 (in the past: {z:[x]})
        assert.equal(x, 42);
      });
      it('array and object', () => {
        const [,[{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
        //added [ ] arround {lang} so [{lang}] = [{env: 'browser', lang: 'ES6'}]
        //in the past: [,{lang}] - after added [ ] => [,[{lang}]]
        assert.equal(lang, 'ES6');
      });
    });
    
    describe('interesting', () => {
      it('missing refs become undefined', () => {
        const {z} = {x: 1}; //delete z: 2 so that z turned out undefined
        //in the past: {z} = {x: 1, z: 2}
        assert.equal(z, void 0);
      });
    
      it('destructure from builtins (string)', () => {
        const {substr} = String.prototype.substr(1);
        // changed 1 to String.prototype.substr(1)
        assert.equal(substr, String.prototype.substr);
      });
    });
  
  });