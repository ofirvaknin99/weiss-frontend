import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent {

  search: string = '';
  searchChange: Subject<string> = new Subject<string>();

  constructor() {
    this.searchChange.pipe(
      debounceTime(300),
      distinctUntilChanged())
      .subscribe((searchInput: string) => { this.search = searchInput })
  }

  inputChanged(searchInput: string) {
    this.searchChange.next(searchInput);
  }

}
