import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Necesarios para los links
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css'
})
export class InstructionsComponent {
username = '';
}

