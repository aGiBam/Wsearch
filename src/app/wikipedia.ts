import { Service } from '@angular/core';

@Service()
export class Wikipedia {
  public search(term: string) {
    return `I'm Wikipedia: Searching for '${term}'`;
 }
}
