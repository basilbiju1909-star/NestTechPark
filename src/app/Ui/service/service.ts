import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.html',
  styleUrls: ['./service.css'],
})
export class Service implements OnInit {
  ngOnInit() {
    console.log('Services page loaded');
  }
}
