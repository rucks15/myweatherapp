import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WeatherService } from '../weather/weather.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  [x : string] : any;
  search = new FormControl('',[Validators.minLength(3)]);
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private weatherService:WeatherService) { }
  getErrorMessage(){
    return this.search.hasError('minlength') ? 'Type more than 3 characters' : '';
  }

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(
      (searchValue : string) => {
        if(!this.search.invalid)
        this.searchEvent.emit(searchValue)
      }
    )
  }

}
