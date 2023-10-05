import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myBirthday: Date = new Date('2000-09-28');
  currentAge: number = 0;

  constructor(private readonly datePipe: DatePipe) {
    // Create a JavaScript Date object for the current date
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate.getTime() - this.myBirthday.getTime();
    // Convert the time difference to years
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years
    this.currentAge = Math.floor(timeDifference / millisecondsInYear);
  }
}
