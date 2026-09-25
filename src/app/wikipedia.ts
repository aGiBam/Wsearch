import { Inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Service()
export class Wikipedia {
  private http = Inject(HttpClient);

  public search(term: string) {
    return this.http.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`);
  }
}
