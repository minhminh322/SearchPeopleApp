import { Component } from '@angular/core';
import { User } from '../../shared/search.interface';
import { SearchService } from '../../shared/search.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css',
})
export class TableListComponent {
  usersList: User[] = [];
  searchValue: string = '';
  constructor(private searchService: SearchService) {}
  ngOnInit() {
    this.searchService.usersList$.subscribe((users) => {
      // console.log(users);
      this.usersList = users;
    });
  }

  searchChange(value: string) {
    this.searchValue = value;
  }
}
