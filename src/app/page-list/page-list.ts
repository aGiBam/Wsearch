import { Component, Input } from '@angular/core';
@Component({
  imports: [],
  selector: 'app-page-list',
  styleUrl: './page-list.scss',
  templateUrl: './page-list.html',
})
export class PageList {
  @Input() pages = [];
}
