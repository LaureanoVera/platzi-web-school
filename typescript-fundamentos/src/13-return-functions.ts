(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => (total += item));
    return total.toString();
  };

  const printTotal = (): void => {
    const rta = calcTotal([1, 5, 2, 7, 9]);
    console.log(`Final price: ${rta}`);
  };

  printTotal();
})();
