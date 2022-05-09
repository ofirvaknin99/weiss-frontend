import { Component, Input } from '@angular/core';
import { media } from 'src/types/media';
import { MediaService } from '../../services/mediaService.service';

@Component({
  selector: 'app-searched-medias',
  templateUrl: './searched-medias.component.html',
  styleUrls: ['./searched-medias.component.css']
})
export class SearchedMediasComponent {

  @Input() searchQuery: string;
  medias: media[] = [];
  wishlist: media[] = [];

  constructor(private MovieService: MediaService) { }

  ngOnChanges() {
    if (this.searchQuery.length > 1) {
      this.MovieService.getMedias(this.searchQuery).then(mediasResponse => {
        this.medias = mediasResponse.data;
      }).catch((err) => {
        console.log(err)
      });
    }
  }

  editWishlist(receivedMedia: media) {
    if (this.checkForWishlistedMedia(receivedMedia)) {
      this.wishlist = [...this.wishlist.filter((el) => el.imdbID != receivedMedia.imdbID)]
    } else {
      this.wishlist = [...this.wishlist, receivedMedia]
    }
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }

  checkForWishlistedMedia(media: media): boolean {
    return this.wishlist.map((media) => media.imdbID).indexOf(media.imdbID) > -1;
  }
}
