import { Pipe, PipeTransform } from '@angular/core';
import { User } from './search.interface';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipePipe implements PipeTransform {
  transform(users: User[], name: string) {
    const newUsers = users.filter((value) => {
      return value.firstName.toLowerCase().startsWith(name.toLowerCase());
    });
    return newUsers;
  }
}
