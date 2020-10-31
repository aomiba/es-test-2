new Promise((resolve, reject) => {
  console.log(`new promise constructor`);
  resolve(true);
}).then((res) => {
  console.log(`.then: ${res}`);
});

console.log(`同步代码最底部`);

/**
 * =>
 * new promise constructor
 同步代码最底部
.then: true
 */
