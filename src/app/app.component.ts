import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { InstructionsComponent } from "./instructions/instructions.component";

@Component({
  selector: 'app-root',
  standalone: true, // ← Esto es crucial
  imports: [
    RouterOutlet,     // Para <router-outlet>
    RouterLink,       // Para routerLink
    RouterLinkActive  // Para routerLinkActive
  ],
  templateUrl: './app.component.html',  
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Offline-Brawl';
}
