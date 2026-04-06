import { Component, Output, EventEmitter } from '@angular/core';
import { players } from '../../data//players';
import { Player } from '../../models/player';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-players-component',
  imports: [FormsModule],
  templateUrl: './players-component.html',
  styleUrl: './players-component.css',
})
export class PlayersComponent {
  players = players;
  showFilters = false;
  searchText:string = '';
  positionFilter:string = '';
  ageFilter?: number;
  filteredPlayers:Player[] = [];
  @Output()

  playerSelected = new EventEmitter<Player>();

  selectPlayer(player: Player){
    console.log("Jugador Seleccionado: ", player);
    this.playerSelected.emit(player);
  }
  ngOnInit(){
    this.filteredPlayers = this.players;
  }

  applyFilters(){
    this.filteredPlayers = this.players.filter(player => {
      const matchName = player.nombre.toLowerCase().includes(this.searchText.toLowerCase()) ||
                        player.apellidos.toLowerCase().includes(this.searchText.toLowerCase());
      const matchPosition = this.positionFilter === '' || player.posicion === this.positionFilter;
      const matchAge = !this.ageFilter || player.edad <= this.ageFilter;

      return matchName && matchPosition && matchAge;
    });
  }
}
