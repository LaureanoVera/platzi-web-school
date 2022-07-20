const date: Date = new Date();

console.log(date.getDate());
console.log(date.getMonth());

const date2: Date = new Date(2002, 11, 17, 0);
console.log(date2);

class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number = 2002, month: number = 12, day: number = 17) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  showDate = () => {
    console.log('Year:', this.year);
    console.log('Month:', this.month);
    console.log('Day:', this.day);
  };
}

const myDate = new MyDate(2022, 7, 20);
myDate.showDate();
