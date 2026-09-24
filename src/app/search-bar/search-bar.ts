import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-search-bar',
  styleUrl: './search-bar.scss',
  templateUrl: './search-bar.html',
})
export class SearchBar {
  @Output() submitted = new EventEmitter<string>();
  term = '';

  // onInput(value: string) {
  //   this.term = value;
  //   console.log('Input value:', value);
  // }

  onFormSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // console.log('Form submitted with term:', this.term);
    this.submitted.emit(this.term); // Emit the term to the parent component
  }
}
