(() => {
  let isEnable: boolean = true;
  let isGreater: boolean = false;
  isEnable = false;

  const random = Math.random();
  console.log('random', random);

  isGreater = random > 0.19 ? false : true;
  console.log(!isGreater);
})();
