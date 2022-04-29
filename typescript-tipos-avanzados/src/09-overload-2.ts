export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: 0 | 1): boolean;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(); //string
//   } else {
//     return input.split(","); //string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(); //string
  } else if (typeof input === "string") {
    return input.split(","); //string[]
  } else if (typeof input === "number") {
    return input === 1;
  }
}

const rtaArr = parseStr("Laureano");
console.log(rtaArr);

const rtaStr = parseStr(rtaArr);
console.log(rtaStr);

const rtaNum = parseStr(1);
console.log(rtaNum);
