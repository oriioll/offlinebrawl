import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router'; // Añade esto para redirecció

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Necesarios para los links
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
username: string = '';
 // Inyecta el Router en el constructor si quieres redirigir
 constructor(private router: Router) {}

 saveUser(): void {
   const inputElement = document.getElementById('username') as HTMLInputElement;
   
   if (inputElement && inputElement.value) {
     this.username = inputElement.value;
     
     // GUARDA EL USERNAME PARA TODA LA APLICACIÓN (1 línea nueva)
     localStorage.setItem('currentUser', this.username);
     
     // Opcional: Redirige a otra página (ej. home)
     
     console.log('Usuario guardado:', this.username); // Para debug
   }
 }
}


