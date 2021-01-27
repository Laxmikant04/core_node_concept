let bar;

function someAsyncApiCall(callback) { callback(); }

someAsyncApiCall(() => {
  console.log('bar', bar); // undefined
});

bar = 1;