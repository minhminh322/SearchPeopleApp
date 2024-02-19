import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './component/search-box/search-box.component';
import { TableListComponent } from './component/table-list/table-list.component';
import { SearchService } from './shared/search.service';
import { FormsModule } from '@angular/forms';
import { SearchPipePipe } from './shared/search-pipe.pipe';

@NgModule({
  declarations: [SearchBoxComponent, TableListComponent, SearchPipePipe],
  imports: [CommonModule, FormsModule, DatePipe],
  exports: [TableListComponent, SearchBoxComponent],
  providers: [SearchService],
})
export class HomeModule {}
