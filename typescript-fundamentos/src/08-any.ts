(() => {
  let dinamicEntry: any;
  dinamicEntry = 100000000;
  dinamicEntry = {};
  dinamicEntry = 'Kakarotoooo!';

  let rta = (dinamicEntry as string).toLowerCase();

  dinamicEntry = 0.175512332002;
  rta = (<number>dinamicEntry).toFixed(2);
})();
