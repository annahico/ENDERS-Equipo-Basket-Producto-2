import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../../models/player';
import { MediaComponent } from '../media-component/media-component';


@Component({
  selector: 'app-detail-component',
  imports: [MediaComponent],
  templateUrl: './detail-component.html',
  styleUrl: './detail-component.css',
})
export class DetailComponent {
  currentVideoIndex = 0;
  @Input()
  player?: Player;

  @Output()
  closeDetail = new EventEmitter<void>();

  close(){
    this.closeDetail.emit();
  }

  hasMultipleVideos(): boolean {
    return (this.player?.videos?.length ?? 0) > 1;
  }

  nextVideo(){
    if(!this.player) return;

    if(this.currentVideoIndex < this.player.videos.length -1){
      this.currentVideoIndex++;
    }
  }
  prevVideo(){
    if(this.currentVideoIndex > 0){
      this.currentVideoIndex--;
    }
  }
  ngOnChanges(){
    this.currentVideoIndex = 0;
  }
}
