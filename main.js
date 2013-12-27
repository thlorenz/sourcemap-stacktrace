'use strict';

function foo () {
  var a = 3;
  console.log(a);
  console.trace();
  console.log('foo stack', new Error().stack);
}

function bar() {
  console.log('gonna throw now');
  throw new Error('told you :P');
}

foo();

bar();
