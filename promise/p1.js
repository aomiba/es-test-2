Promise.resolve(true)
  .then((res) => {
    console.log(1);
  })
  .catch((err) => {
    console.log(2);
  })
  .then((res) => {
    console.log(3);
  })
  .catch((err) => {
    console.log(4);
  });

  /**
   * 1. 在链上寻找下一个对应状态，可以跳
   * 2. .then .catch 默认状态都是 Promise.resolve(undefined)
   * 
   * =>
   * 1
   * 2
   */


1
2
undefined
resolve
reject: reject