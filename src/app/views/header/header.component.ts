import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  date: string;

  constructor() { }

  ngOnInit(): void {
    const today = new Date();
    this.date = String(today.getMonth() + 1).padStart(2, '0') + '/' + String(today.getFullYear()).padStart(4, '0')
  }
  

}
