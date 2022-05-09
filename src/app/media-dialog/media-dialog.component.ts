import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fullMediaDetails } from 'src/types/media';
import { MediaService } from '../../services/mediaService.service';

const DEFAULT_IMAGE = '../../assets/defaultImg.jpg';

@Component({
  selector: 'app-media-dialog',
  templateUrl: './media-dialog.component.html',
  styleUrls: ['./media-dialog.component.css']
})
export class MediaDialogComponent implements OnInit {
  mediaToDisplay: fullMediaDetails;
  ifMediaDataArrived: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    private MovieService: MediaService) {
  }

  ngOnInit(): void {
    this.MovieService.getFullMediaDetails(this.data.media.imdbID).then(mediaDetails => {
      this.mediaToDisplay = mediaDetails.data;
      this.ifMediaDataArrived = true;
    }).catch((err) => {
      console.log(err)
    });
  }

  ifDataExist(mediaField: string) {
    return mediaField != 'N/A';
  }

  displayDialogPoster() {
    return this.mediaToDisplay.Poster == 'N/A' ? DEFAULT_IMAGE : this.mediaToDisplay.Poster;
  }

}
