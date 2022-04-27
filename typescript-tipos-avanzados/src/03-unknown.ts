let anyVar: any;
anyVar = [];

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.toUpperCase();

let unknownVar: unknown;
unknownVar = true;
// unknownVar.doSomething();
if (typeof unknownVar == "string") {
  unknownVar.toUpperCase();
}

if (typeof unknownVar == "boolean") {
  let isNewV2: boolean = unknownVar;
}
