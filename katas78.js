// 78: Promise - API overview
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Promise` API overview', function() {

    it('`new Promise()` requires a function as param', () => {
      const param = () => null;
      //added = () => null to make param as a function
      //in the past: const param = null;
      assert.doesNotThrow(() => { new Promise(param); });
    });
  
    describe('resolving a promise', () => {
      // reminder: the test passes when a fulfilled promise is returned
      it('via constructor parameter `new Promise((resolve) => { resolve(); })`', () => {
        const param = (resolve) => { resolve(); };
        //added resolve in () - just like the instruction wants
        //in the past: const param = () => { resolve(); };
        return new Promise(param);
      });
      it('using `Promise.resolve()`', () => {
        return Promise.resolve('all fine');//changed Promise.reject to Promise.resolve
        //in the past: return Promise.reject('all fine');
      });
    });
  
    describe('a rejected promise', () => {
      it('using the constructor parameter', (done) => {
        const promise = new Promise((resolve, reject) => { reject(); });
        //added resolve in front of reject inside new Promise
        //const promise = new Promise((reject) => { reject(); });
        promise
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done());
      });
      it('via `Promise.reject()`', (done) => {
        const promise = Promise.reject(); //changed Promise.resolve
        //in the past: const promise = Promise.resolve();
        promise
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done());
      });
    });
  
    const resolvingPromise = Promise.resolve();
    const rejectingPromise = Promise.reject();
  
    describe('`Promise.all()`', () => {
      it('`Promise.all([p1, p2])` resolves when all promises resolve', () =>
        Promise.all([resolvingPromise, resolvingPromise])
        //deleted the rejectingPromise inside Promise.all()
        //in the past: Promise.all([resolvingPromise, rejectingPromise, resolvingPromise])
      );
      it('`Promise.all([p1, p2])` rejects when a promise is rejected', (done) => {
        Promise.all([resolvingPromise, rejectingPromise])
        //added rejectingPromise inside Promise.all
        //in the past: Promise.all([resolvingPromise])
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done())
      });
    });
  
    describe('`Promise.race()`', () => {
      it('`Promise.race([p1, p2])` resolves when one of the promises resolves', () =>
        Promise.race([resolvingPromise, rejectingPromise])
        //added resolvingPromise inside Promise.race and has to be before rejectingPromise
        //in the past: Promise.race([rejectingPromise])
      );
      it('`Promise.race([p1, p2])` rejects when one of the promises rejects', (done) => {
        Promise.race([rejectingPromise, resolvingPromise])
        //added rejectingPromise inside Promise.race and has to be before resolvingPromise
        //in the past: Promise.race([resolvingPromise])
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done())
      });
      it('`Promise.race([p1, p2])` order matters (and timing)', () =>
        Promise.race([resolvingPromise, rejectingPromise ])
        //changed the order of resolving and rejecting
        //in the past: Promise.race([rejectingPromise, resolvingPromise])
      );
    });
  
  });
  