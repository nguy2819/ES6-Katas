// 77: Promise - chaining 
// To do: make all tests pass, leave the assert lines unchanged!

describe('chaining multiple promises can enhance readability', () => {

    describe('prerequisites for understanding', function() {
      
      it('reminder: the test passes when a fulfilled promise is returned', function() {
        return Promise.resolve('I should fulfill.');
        //changed Promise.reject to Promise.resolve
      });
    
      it('a function given to `then()` fulfills (if it doesnt throw)', function() {
        const beNice = () => 'I am nice';
        //deleted { throw new Error( ) } around 'I am nice'
        //in the past: const beNice = () => { throw new Error('I am nice') };
        
        return Promise.resolve()
          .then(beNice)
          .then(niceMessage => assert.equal(niceMessage, 'I am nice'));
      });
      
    });
  
    describe('chain promises', function() {
      
      const removeMultipleSpaces = string => string.replace(/\s+/g, ' ');
      
      it('`then()` receives the result of the promise it was called on', function() {
        const wordsPromise = Promise.resolve('one   space     between each     word');
        return wordsPromise
          .then(string => removeMultipleSpaces(string))
          //added "string" inside removeMultipleSpaces()
          //in the past: .then(string => removeMultipleSpaces())
          .then(actual => {assert.equal(actual, 'one space between each word')})
        ;
      });
      
      const appendPeriod = string => `${string}.`;
      
      it('multiple `then()`s can be chained', function() {
        const wordsPromise = Promise.resolve('Sentence without       an end');
        //added . at then end of the sentence
        //in the past: const wordsPromise = Promise.resolve('Sentence without       an end');
         return wordsPromise 
          .then(removeMultipleSpaces)
          .then(appendPeriod) //OR add this line 
          .then(actual => {assert.equal(actual, 'Sentence without an end.')})
        ;
      });
      
      const trim = string => string.replace(/^\s+/, '').replace(/\s+$/, '');
      
      it('order of the `then()`s matters', function() {
        const wordsPromise = Promise.resolve('Sentence without       an end ');
        //remove the space at the end of the sentence
        //in the past: const wordsPromise = Promise.resolve('Sentence without       an end ');
        return wordsPromise
          .then(trim) //OR changed the order from (appendPeriod, trim, remove) to (trim, remove, append)
          .then(removeMultipleSpaces)
          .then(appendPeriod)
          .then(actual => {assert.equal(actual, 'Sentence without an end.')})
        ;
      });
      
      const asyncUpperCaseStart = (string, onDone) => {
        const format = () => onDone(string[0].toUpperCase() + string.substr(1));
        setTimeout(format, 100);
      };
    
      it('any of the things given to `then()` can resolve asynchronously (the real power of Promises)', function() {
        const wordsPromise = Promise.resolve('sentence without an end');
        return wordsPromise
          .then(string => new Promise(resolve => asyncUpperCaseStart(string, resolve)))
          //passed (string, resolve) inside asyncUpperCaseStart()
          //in the past: .then(string => new Promise(resolve => asyncUpperCaseStart))
          .then(string => new Promise(resolve => setTimeout(() => resolve(appendPeriod(string)), 100)))
          .then(actual => {assert.equal(actual, 'Sentence without an end.')})
        ;
      });
    
      it('also asynchronously, the order still matters, promises wait, but don`t block', function() {
        const wordsPromise = Promise.resolve('trailing space   ');
        return wordsPromise
          .then(string => new Promise(resolve => asyncUpperCaseStart(string, resolve)))
          .then(string => new Promise(resolve => setTimeout(() => resolve(trim(string)), 100)))
          .then(string => new Promise(resolve => setTimeout(() => resolve(appendPeriod(string)), 100)))
          //reorder the order of appendPeriod and trim to trim and then appendPeriod
          .then(actual => {assert.equal(actual, 'Trailing space.')})
        ;
      });
      
    });
  
  });
  