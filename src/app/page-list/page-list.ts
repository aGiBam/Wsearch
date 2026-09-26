import { Component, Input } from '@angular/core';

interface WikipediaPage {
  pageid: number;
  title: string;
  wordcount: number;
  snippet: string;
}

@Component({
  imports: [],
  selector: 'app-page-list',
  styleUrl: './page-list.scss',
  templateUrl: './page-list.html',
})
export class PageList {
  @Input() pages: WikipediaPage[] = [];
  // xss = '<img src="" onerror=alert(123)>';
}
