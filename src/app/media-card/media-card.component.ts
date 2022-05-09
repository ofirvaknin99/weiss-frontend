import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { media } from 'src/types/media';
import { MatDialog } from '@angular/material/dialog';
import { MediaDialogComponent } from '../media-dialog/media-dialog.component';

const DEFAULT_IMAGE = '../../assets/defaultImg.jpg';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css']
})
export class MediaCardComponent {

  @Input() media: media;
  @Input() isMediaWishlisted: boolean;
  @Output() cardChangeEmitter = new EventEmitter<media>();

  changeImageDisplay: boolean;

  constructor(public dialog: MatDialog) {
    this.changeImageDisplay = false;
  }


  displayPoster() {
    return this.media.Poster == 'N/A' ? DEFAULT_IMAGE : this.media.Poster;
  }

  editCardWishlistStatus(event) {
    event.stopPropagation();
    this.cardChangeEmitter.emit(this.media);
    this.isMediaWishlisted = !this.isMediaWishlisted;
  }

  openDialog() {
    this.dialog.open(MediaDialogComponent, { width: '1100px', height: '550px', data: { media: this.media } })
  }
}
