import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { media } from 'src/types/media';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  @Input() wishlist: media[];
  @Output() wishlistChangeEmitter = new EventEmitter<media>();

  constructor() { }

  ngOnInit(): void {
    this.wishlist = JSON.parse(localStorage.getItem('wishlist'));
  }

  onWishlistChangeEdited(selctedMedia: media) {
    this.wishlistChangeEmitter.emit(selctedMedia);
  }
}
