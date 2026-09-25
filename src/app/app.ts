import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from './search-bar/search-bar';
import { PageList } from './page-list/page-list';
import { Wikipedia } from './wikipedia';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBar, PageList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private wikipediaService: Wikipedia) {}

  onTerm(term: string) {
    const result = this.wikipediaService.search(term);
    console.log(result);
  }
}
