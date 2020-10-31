Promise.reject(true)
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
  })
  .then(() => {
    console.log(5);
  })
  .catch(() => {
    console.log(6);
  });

/**
 * =>
 * 2
 * 3
 * 5
 */
