import { Component, Output, EventEmitter, inject, ChangeDetectorRef } from '@angular/core';
import { Player } from '../../models/player';
import { FormsModule } from '@angular/forms';
import { PlayersService } from '../../services/players.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './players-component.html',
  styleUrl: './players-component.css',
})
export class PlayersComponent {
  private playersService = inject(PlayersService);
  private cdr = inject(ChangeDetectorRef); // 👈 añadir esto

  players: Player[] = [];
  showFilters = false;
  searchText: string = '';
  positionFilter: string = '';
  ageFilter?: number;
  filteredPlayers: Player[] = [];

  @Output()
  playerSelected = new EventEmitter<Player>();

  ngOnInit() {
    this.playersService.getPlayers().subscribe(data => {
      this.players = data;
      this.filteredPlayers = data;
      this.cdr.detectChanges(); // 👈 añadir esto
    });
  }

  selectPlayer(player: Player) {
    this.playerSelected.emit(player);
  }

  applyFilters() {
    this.filteredPlayers = this.players.filter(player => {
      const matchName = player.nombre.toLowerCase().includes(this.searchText.toLowerCase()) ||
                        player.apellidos.toLowerCase().includes(this.searchText.toLowerCase());
      const matchPosition = this.positionFilter === '' || player.posicion === this.positionFilter;
      const matchAge = !this.ageFilter || player.edad <= this.ageFilter;
      return matchName && matchPosition && matchAge;
    });
  }
}