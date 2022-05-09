import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaService } from '../services/mediaService.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { MediaDialogComponent } from "./media-dialog/media-dialog.component";
import { SearchedMediasComponent } from './searched-medias/searched-medias.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSearchComponent,
    SearchedMediasComponent,
    MediaCardComponent,
    WishlistComponent,
    MediaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
