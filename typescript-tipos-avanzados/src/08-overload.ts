// Lau => [L,a,u] === string => string[]
// [L,a,u] = Lau === string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(); //string
  } else {
    return input.split(","); //string[]
  }
}

const rtaArr = parseStr("Laureano");
console.log(rtaArr);

const rtaStr = parseStr(rtaArr);
console.log(rtaStr);
