// resources.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

// Define la interfaz para nuestros recursos
export interface PortfolioResource {
  type: 'Libro' | 'Canal de YouTube';
  title: string;
  authorOrChannel: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-resources',
  standalone: true, // Asegúrate de que el componente sea standalone
  imports: [CommonModule], // Añade CommonModule a los imports
  templateUrl: './resources.component.html',
})
export class ResourcesComponent {
  // Array con tus recursos de estudio
  resources: PortfolioResource[] = [
    {
      type: 'Libro',
      title: 'Clean Code',
      authorOrChannel: 'Robert C. Martin',
      imageUrl: '/assets/images/clean-code.jpg', // Asegúrate de tener esta imagen en tu carpeta assets
      link: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882'
    },
    {
      type: 'Canal de YouTube',
      title: 'freeCodeCamp.org',
      authorOrChannel: 'freeCodeCamp',
      imageUrl: '/assets/images/freecodecamp.jpg', // Y esta también
      link: 'https://www.youtube.com/c/Freecodecamp'
    },
    {
      type: 'Libro',
      title: 'The Pragmatic Programmer',
      authorOrChannel: 'David Thomas, Andrew Hunt',
      imageUrl: '/assets/images/pragmatic-programmer.jpg',
      link: 'https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X'
    },
    {
      type: 'Canal de YouTube',
      title: 'Fireship',
      authorOrChannel: 'Fireship',
      imageUrl: '/assets/images/fireship.jpg',
      link: 'https://www.youtube.com/c/Fireship'
    }
  ];

}
