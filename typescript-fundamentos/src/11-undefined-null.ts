(() => {
  type UserName = string | null;
  let myNull = null;
  let myUndefined = undefined;

  let myNumber: number | null = null;
  myNumber = 19;

  let myString: string | undefined = undefined;
  myString = 'Laureano Vera';

  function hi(name: UserName) {
    let hello = 'Hello';
    if (name) {
      hello = `${hello} ${name}!`;
    } else {
      hello = `${hello} nobody!`;
    }
    console.log(hello);
  }

  function hiV2(name: UserName) {
    let hello = 'Hello';
    hello += name?.toLowerCase() || 'nobody';
  }

  hi('Ivan');
  hi(null);
})();
