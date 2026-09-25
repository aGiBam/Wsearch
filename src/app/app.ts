import { Component } from '@angular/core';
import { SearchBar } from './search-bar/search-bar';
import { PageList } from './page-list/page-list';
import { Wikipedia } from './wikipedia';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [SearchBar, PageList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private wikipediaService: Wikipedia) {}

  onTerm(term: string) {
    this.wikipediaService.search(term).subscribe((response: any) => {
      console.log(response.query.search);
    });
  }
}
