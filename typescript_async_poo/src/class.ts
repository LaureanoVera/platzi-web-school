export class MyDate {
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

  myMethod(): number {
    const result: number = Number(
      (this.year / (this.month * this.day)).toFixed(2)
    );
    return result;
  }
}
