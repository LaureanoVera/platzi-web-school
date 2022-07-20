import { MyDate } from './class';

const here = new MyDate(2002, 12, 17);
console.log(here.day);
here.day = 30;
console.log(here.day);
