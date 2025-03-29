import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Antes: homeComponent
import { InstructionsComponent } from './instructions/instructions.component';
import { RegisterComponent } from './register/register.component';
import { GameComponent } from './game/game.component';  // Antes: gameComponent

export const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'instructions', component: InstructionsComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'play', component: GameComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

