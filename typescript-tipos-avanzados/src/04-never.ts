const withoutEnd = () => {
  while (true) {
    console.log("ahhh");
  }
};

const fail = (msg: string) => {
  throw new Error(msg);
};

const example = (input: unknown) => {
  if (typeof input == "string") {
    return "is String";
  } else if (Array.isArray(input)) {
    return "is Array";
  }
  return fail("not match");
};

console.log(example("Hello"));
console.log(example([]));
console.log(example(1));
