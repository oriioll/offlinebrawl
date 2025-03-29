import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Necesarios para los links
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})

export class GameComponent {
  username: string = '';
  baseImageUrl = 'https://www.noff.gg/brawl-stars/res/img/brawler_portraits/';
  
  constructor() {
    // RECUPERA EL USERNAME GUARDADO (1 línea)
    this.username = localStorage.getItem('currentUser') || 'Invitado';
  }
  // Lista de brawlers con sus win rates (ejemplo)
  brawlers = [
    { name: 'Lumi', image: 'lumi.webp', winRate: 77.40 },
    { name: 'Ollie', image: 'ollie.webp', winRate: 72.51 },
    { name: 'Finx', image: 'finx.webp', winRate: 72.50 },
    { name: 'Mr. P', image: 'mr-p.webp', winRate: 67.35 },
    { name: 'Meeple', image: 'meeple.webp', winRate: 65.66 },
    { name: 'Draco', image: 'draco.webp', winRate: 65.01 },
    { name: 'Doug', image: 'doug.webp', winRate: 64.95 },
    { name: 'Eve', image: 'eve.webp', winRate: 64.88 },
    { name: 'Buster', image: 'buster.webp', winRate: 64.65 },
    { name: 'Jacky', image: 'jacky.webp', winRate: 64.39 },
    { name: 'Hank', image: 'hank.webp', winRate: 64.27 },
    { name: 'Ash', image: 'ash.webp', winRate: 64.10 },
    { name: 'Sam', image: 'sam.webp', winRate: 64.08 },
    { name: 'Charlie', image: 'charlie.webp', winRate: 63.92 },
    { name: 'Meg', image: 'meg.webp', winRate: 63.67 },
    { name: 'Juju', image: 'juju.webp', winRate: 63.64 },
    { name: 'Lola', image: 'lola.webp', winRate: 63.48 },
    { name: 'R-T', image: 'r-t.webp', winRate: 63.44 },
    { name: 'Bonnie', image: 'bonnie.webp', winRate: 63.39 },
    { name: 'Chuck', image: 'chuck.webp', winRate: 63.22 },
    { name: 'Pearl', image: 'pearl.webp', winRate: 62.96 },
    { name: 'Shade', image: 'shade.webp', winRate: 62.83 },
    { name: 'Pam', image: 'pam.webp', winRate: 62.60 },
    { name: 'Otis', image: 'otis.webp', winRate: 62.57 },
    { name: 'Sandy', image: 'sandy.webp', winRate: 62.48 },
    { name: 'Grom', image: 'grom.webp', winRate: 62.11 },
    { name: 'Rosa', image: 'rosa.webp', winRate: 61.99 },
    { name: 'Clancy', image: 'clancy.webp', winRate: 61.82 },
    { name: 'Tara', image: 'tara.webp', winRate: 61.79 },
    { name: 'Janet', image: 'janet.webp', winRate: 61.66 },
    { name: 'Nita', image: 'nita.webp', winRate: 61.60 },
    { name: 'Ruffs', image: 'ruffs.webp', winRate: 61.54 },
    { name: 'Moe', image: 'moe.webp', winRate: 61.46 },
    { name: 'Maisie', image: 'maisie.webp', winRate: 61.25 },
    { name: 'Amber', image: 'amber.webp', winRate: 61.22 },
    { name: 'Bibi', image: 'bibi.webp', winRate: 61.02 },
    { name: 'Willow', image: 'willow.webp', winRate: 60.72 },
    { name: 'Carl', image: 'carl.webp', winRate: 60.71 },
    { name: 'Angelo', image: 'angelo.webp', winRate: 60.65 },
    { name: 'Lou', image: 'lou.webp', winRate: 60.39 },
    { name: 'Chester', image: 'chester.webp', winRate: 60.23 },
    { name: 'Melodie', image: 'melodie.webp', winRate: 60.12 },
    { name: 'Mico', image: 'mico.webp', winRate: 59.94 },
    { name: 'Larry & Lawrie', image: 'larry-lawrie.webp', winRate: 59.71 },
    { name: 'Griff', image: 'griff.webp', winRate: 59.70 },
    { name: 'Kenji', image: 'kenji.webp', winRate: 59.55 },
    { name: 'Bull', image: 'bull.webp', winRate: 59.53 },
    { name: 'Berry', image: 'berry.webp', winRate: 59.40 },
    { name: 'Frank', image: 'frank.webp', winRate: 59.38 },
    { name: 'Squeak', image: 'squeak.webp', winRate: 59.37 },
    { name: 'Gale', image: 'gale.webp', winRate: 59.34 },
    { name: 'Jessie', image: 'jessie.webp', winRate: 59.27 },
    { name: 'Poco', image: 'poco.webp', winRate: 59.23 },
    { name: 'Bea', image: 'bea.webp', winRate: 59.19 },
    { name: 'Gray', image: 'gray.webp', winRate: 59.03 },
    { name: 'Sprout', image: 'sprout.webp', winRate: 58.84 },
    { name: 'Cordelius', image: 'cordelius.webp', winRate: 58.83 },
    { name: 'Lily', image: 'lily.webp', winRate: 58.81 },
    { name: 'Penny', image: 'penny.webp', winRate: 58.78 },
    { name: 'Belle', image: 'belle.webp', winRate: 58.46 },
    { name: '8-Bit', image: '8-bit.webp', winRate: 58.46 },
    { name: 'Darryl', image: 'darryl.webp', winRate: 58.35 },
    { name: 'El Primo', image: 'el-primo.webp', winRate: 58.27 },
    { name: 'Bo', image: 'bo.webp', winRate: 58.26 },
    { name: 'Gus', image: 'gus.webp', winRate: 58.15 },
    { name: 'Nani', image: 'nani.webp', winRate: 58.10 },
    { name: 'Tick', image: 'tick.webp', winRate: 57.75 },
    { name: 'Kit', image: 'kit.webp', winRate: 57.50 },
    { name: 'Max', image: 'max.webp', winRate: 57.32 },
    { name: 'Barley', image: 'barley.webp', winRate: 57.14 },
    { name: 'Crow', image: 'crow.webp', winRate: 56.99 },
    { name: 'Fang', image: 'fang.webp', winRate: 56.87 },
    { name: 'Shelly', image: 'shelly.webp', winRate: 56.83 },
    { name: 'Spike', image: 'spike.webp', winRate: 56.74 },
    { name: 'Colette', image: 'colette.webp', winRate: 56.71 },
    { name: 'Mandy', image: 'mandy.webp', winRate: 56.61 },
    { name: 'Byron', image: 'byron.webp', winRate: 56.54 },
    { name: 'Brock', image: 'brock.webp', winRate: 56.45 },
    { name: 'Emz', image: 'emz.webp', winRate: 56.44 },
    { name: 'Stu', image: 'stu.webp', winRate: 56.24 },
    { name: 'Leon', image: 'leon.webp', winRate: 56.21 },
    { name: 'Buzz', image: 'buzz.webp', winRate: 55.84 },
    { name: 'Gene', image: 'gene.webp', winRate: 55.20 },
    { name: 'Surge', image: 'surge.webp', winRate: 54.81 },
    { name: 'Edgar', image: 'edgar.webp', winRate: 54.66 },
    { name: 'Piper', image: 'piper.webp', winRate: 54.17 },
    { name: 'Rico', image: 'rico.webp', winRate: 53.94 },
    { name: 'Mortis', image: 'mortis.webp', winRate: 52.91 },
    { name: 'Colt', image: 'colt.webp', winRate: 52.82 },
    { name: 'Dynamike', image: 'dynamike.webp', winRate: 52.19 }
  ];

// Estado del juego
userSelection = {
  name: '',
  image: 'shelly.webp' // Imagen inicial
};

aiBrawlers = {
  next: 'angelo.webp',    // Brawler que se verá a la izquierda
  current: 'shelly.webp'             // Brawler en pelea
};

// Control de vistas
views = {
  showSelection: true,    // Muestra la selección superior
  showFight: false        // Muestra el área de pelea
};

winner = '';

ngOnInit() {
  this.generateNextAIBrawler();
}

onUserSelect(event: Event) {
  const input = event.target as HTMLInputElement;
  const selectedName = input.value;
  
  const brawler = this.brawlers.find(b => b.name === selectedName);
  if (brawler) {
    this.userSelection = {
      name: brawler.name,
      image: brawler.image
    };
    this.views.showSelection = true;
  }
}

generateNextAIBrawler() {
  const randomIndex = Math.floor(Math.random() * this.brawlers.length);
  this.aiBrawlers.next = this.brawlers[randomIndex].image;
}

playNow() {
  if (!this.userSelection.name) {
    this.winner = '¡Selecciona un brawler primero!';
    return;
  }

  // Mover brawlers a posición de pelea
  this.aiBrawlers.current = this.aiBrawlers.next;
  this.views.showFight = true;
  this.views.showSelection = false;
  
  // Calcular resultado
  this.calculateWinner();
  
  // Preparar siguiente brawler IA
  this.generateNextAIBrawler();
}

calculateWinner() {
  const user = this.brawlers.find(b => b.name === this.userSelection.name);
  const ai = this.brawlers.find(b => b.image === this.aiBrawlers.current);
  
  if (user && ai) {
    if (user.winRate > ai.winRate) {
      this.winner = `${this.username}`;
    } else if (user.winRate < ai.winRate) {
      this.winner = `AI`;
    } else {
      this.winner = 'Draw!';
    }
  }
}

newSelection() {
  this.views.showFight = false;
  this.views.showSelection = true;
  this.winner = '';
}
}