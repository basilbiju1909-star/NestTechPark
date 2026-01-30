import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  showWindow = false;

  toggleWindow(): void {
    this.showWindow = !this.showWindow;
  }
}
