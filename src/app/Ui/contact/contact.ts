import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact implements OnInit {
  ngOnInit() {
    console.log('Contact page loaded');
  }

  onSubmit(form: any) {
    console.log('Form submitted:', form);
    // Add form submission logic here
  }
}
