import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  nestDetails = {
    title: 'NestTechPark',
    tagline: 'Where Innovation Meets Technology',
    description: 'Welcome to NestTechPark - your premier destination for cutting-edge technology solutions and innovative services.',
    features: [
      {
        icon: '🚀',
        title: 'Innovation',
        description: 'Cutting-edge technology solutions for modern challenges'
      },
      {
        icon: '⚙️',
        title: 'Services',
        description: 'Comprehensive range of professional services tailored to your needs'
      },
      {
        icon: '🛍️',
        title: 'Products',
        description: 'Premium products designed with quality and excellence in mind'
      },
      {
        icon: '👥',
        title: 'Community',
        description: 'Join our growing community of tech enthusiasts and professionals'
      }
    ]
  };
}
