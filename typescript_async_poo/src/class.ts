export class MyDate {
  constructor(
    private _year: number = 2002,
    public month: number = 12,
    public day: number = 17
  ) {
    // this.year = year || 2002;
    // this.month = month || 12;
    // this.day = day || 17;
  }
  // private year: number;
  // month: number;
  // public day: number;

  // constructor(year: number = 2002, month: number = 12, day: number = 17) {
  //   this.year = year;
  //   this.month = month;
  //   this.day = day;
  // }

  // private
  private checkMonth() {
    if (this.month > 12) {
      this.month = 12;
    }
  }

  private checkDay() {
    if (this.day > 31) {
      this.day = 31;
    }
  }

  // public
  public showDate(): void {
    this.checkMonth();
    this.checkDay();
    console.log('Year:', this._year);
    console.log('Month:', this.month);
    console.log('Day:', this.day);
  }

  // method
  public myMethod(): number {
    const result: number = Number(
      (this._year / (this.month * this.day)).toFixed(2)
    );
    return result;
  }

  // getters
  get year() {
    return this._year;
  }

  get isLeapYear(): boolean {
    return (
      (this._year % 4 == 0 && this._year % 100 != 0) || this._year % 400 == 0
    );
  }
}
