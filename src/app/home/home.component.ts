import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Necesarios para los links
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username: string = '';
  
  constructor() {
    // RECUPERA EL USERNAME GUARDADO (1 línea)
    this.username = localStorage.getItem('currentUser') || 'Invitado';
  }
}

