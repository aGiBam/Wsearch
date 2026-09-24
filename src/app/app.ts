import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from './search-bar/search-bar';
import { PageList } from './page-list/page-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBar, PageList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('wsearch');


  onTerm(term: string) {
    console.log("I'm app: Term submitted:", term);
  }
}
