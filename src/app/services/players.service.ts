import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Player } from '../models/player'; 

@Injectable({ providedIn: 'root' })
export class PlayersService {
  private firestore = inject(Firestore);
  private playersCollection = collection(this.firestore, 'players');

  getPlayers(): Observable<Player[]> {
    return collectionData(this.playersCollection, { idField: 'id' }) as Observable<Player[]>;
  }

  addPlayer(player: Player) {
    return addDoc(this.playersCollection, player);
  }

  updatePlayer(id: string, player: Partial<Player>) {
    const playerDoc = doc(this.firestore, `players/${id}`);
    return updateDoc(playerDoc, player);
  }

  deletePlayer(id: string) {
    const playerDoc = doc(this.firestore, `players/${id}`);
    return deleteDoc(playerDoc);
  }
}