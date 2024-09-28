import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task3';

  selectedNumber: number = 1;

  // Array to store all tables
  allTables: { number: number, values: number[] }[] = [];

  generateTables(): void {
    this.allTables = []; // Clear the previous tables

    for (let i = 1; i <= this.selectedNumber; i++) {
      let tableValues: number[] = [];
      for (let j = 1; j <= 10; j++) {
        tableValues.push(i * j); // Generate each table row
      }
      this.allTables.push({ number: i, values: tableValues });
    }
  }
}
