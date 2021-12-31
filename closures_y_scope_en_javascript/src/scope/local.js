const helloWorld = () => {
  const string = "Hello World";
  console.log(string);
};
helloWorld();

var scope = "I'm global";

const functionScope = () => {
  var scope = "I'm just a local";
  const func = () => {
    return scope;
  };
  console.log(func());
};
functionScope();
