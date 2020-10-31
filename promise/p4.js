var p1 = new Promise(function (resolve, reject) {
  resolve(Promise.resolve("resolve"));
});

var p2 = new Promise(function (resolve, reject) {
  resolve(Promise.reject("reject"));
});

var p3 = new Promise(function (resolve, reject) {
  reject(Promise.resolve("resolve"));
});

p1.then(
  function fulfilled(value) {
    console.log("p1 fulfilled: " + value);
  },
  function rejected(err) {
    console.log("p1 rejected: " + err);
  }
);

p2.then(
  function fulfilled(value) {
    console.log("p2 fulfilled: " + value);
  },
  function rejected(err) {
    console.log("p2 rejected: " + err);
  }
);

p3.then(
  function fulfilled(value) {
    console.log("p3 fulfilled: " + value);
  },
  function rejected(err) {
    console.log("p3 rejected: " + err);
  }
);

/**
 * resolve() 有拆箱的能力, resolve(Promise.reject(11)) 直接返回 Promise.reject(11)
 * reject() 没有拆箱能力， reject(Promise.reject(22)), 原样返回
 * =>
 * p3 rejected: [object Promise]
 * p1 fulfilled: resolve
 * p2 rejected: reject
 */
