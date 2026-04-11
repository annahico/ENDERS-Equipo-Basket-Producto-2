import { Component, signal } from '@angular/core';
import { DetailComponent } from './components/detail-component/detail-component';
import { Player } from './models/player';
import { PlayersComponent } from './components/players-component/players-component';

@Component({
  selector: 'app-root',
  imports: [DetailComponent, PlayersComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('equipo-basket-test');
  view = 'home';

  selectedPlayer?: Player | null;

  onPlayerSelected(player: Player){
    this.selectedPlayer = player;
    document.body.classList.add('model-open');
  }
  closeDetail(){
    this.selectedPlayer = null;
    document.body.classList.remove('model-open')
  }
}
