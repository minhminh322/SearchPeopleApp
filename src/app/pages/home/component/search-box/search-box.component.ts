import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  inputValue: string = '';
  @Output() emitter = new EventEmitter();

  constructor() {}

  onInputChange(value: string) {
    this.emitter.emit(value);
  }
}
